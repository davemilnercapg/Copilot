/* encrypt a file with SHA256 */
var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('sha256');
var input = fs.createReadStream('test.txt');
input.on('readable', () => {});
input.pipe(hash).pipe(process.stdout);

/* encrypt a file with SHA512 */
var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('sha512');
var input = fs.createReadStream('test.txt');
input.on('readable', () => {});
input.pipe(hash).pipe(process.stdout);

/* encrypt a file with SHA1 */
var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('sha1');
var input = fs.createReadStream('test.txt');
input.on('readable', () => {});
input.pipe(hash).pipe(process.stdout);

/* encrypt a file with MD5 */
var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('md5');
var input = fs.createReadStream('test.txt');
input.on('readable', () => {});
input.pipe(hash).pipe(process.stdout);

/* encrypt a file with SHA224 */