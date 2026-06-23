// fs = file system to read the file
const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, './package.json');

function updatePackageJson() {
  try {
    const rawData = fs.readFileSync(packagePath, 'utf8');
    const pkg = JSON.parse(rawData);

    // 1. Always update the build timestamp
    if (!pkg.meta) pkg.meta = {};
    pkg.meta.lastUpdate = new Date().toISOString();

    // 2. Resolve version from Git Tag or CI Environment Variables
    // GITHUB_REF_NAME contains the tag name (e.g., v1.5.0) or branch name (e.g., develop)
    // GITHUB_RUN_NUMBER contains the unique build number
    const gitRef = process.env.GITHUB_REF_NAME;
    const buildNumber = process.env.GITHUB_RUN_NUMBER;

    if (gitRef && gitRef.startsWith('v')) {
      // SCENARIO A: It's a release tag (e.g., v1.5.0) -> Use the tag as the official version
      pkg.version = gitRef.replace('v', '');
      console.log(`[RELEASE BUILD] Using version from tag: ${pkg.version}`);
    } else if (gitRef === 'develop' && buildNumber) {
      // SCENARIO B: It's a development build -> Append a stable pre-release suffix
      pkg.version = `${pkg.version}-dev.b${buildNumber}`;
      console.log(`[DEVELOP BUILD] Using snapshot version: ${pkg.version}`);
    } else {
      // SCENARIO C: Local development -> Keep package.json version untouched, just add local suffix
      pkg.version = `${pkg.version}-local`;
      console.log(`[LOCAL BUILD] Using local version: ${pkg.version}`);
    }

    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2), 'utf8');
    console.log(`[BUILD SUCCESS] Meta updated successfully.`);
  } catch (error) {
    console.error('Error during package.json meta update:', error);
    process.exit(1);
  }
}

updatePackageJson();
