const { execSync } = require('child_process');
const crypto = require('crypto');

// Function to generate a random string
function getRandomString(length) {
  return crypto.randomBytes(length).toString('hex');
}

try {
  for (let i = 0; i < 50; i++) {
    // Create a random string

    // Create a file with the random string content
    execSync(`echo "${i+1}" >> file.txt`);

    // Stage the file for commit
    execSync('git add file.txt');
    // Create a commit with the tag and random string in the message
    execSync(`git commit -m "[CG-1] ${i + 1}"`);
  }
  console.log('50 commits created successfully.');
} catch (error) {
  console.error('Error creating commits:', error);
}
