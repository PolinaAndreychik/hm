const fse = require('fs-extra');
fse.ensureDirSync('dir1')
fse.ensureFileSync('C:/Users/Admin/itjs/hm/hm2/dir1/file.txt')
fse.ensureDirSync('dir2')
fse.moveSync('C:/Users/Admin/itjs/hm/hm2/dir1/file.txt', 'C:/Users/Admin/itjs/hm/hm2/dir2/file.txt')
fse.ensureDirSync('dir33')
fse.copySync('C:/Users/Admin/itjs/hm/hm2/dir2/file.txt', 'C:/Users/Admin/itjs/hm/hm2/dir33/file.txt')
fse.emptyDirSync('C:/Users/Admin/itjs/hm/hm2/dir2')
fse.emptyDirSync('C:/Users/Admin/itjs/hm/hm2/dir33')
fse.removeSync('C:/Users/Admin/itjs/hm/hm2/dir1')
fse.removeSync('C:/Users/Admin/itjs/hm/hm2/dir2')
fse.removeSync('C:/Users/Admin/itjs/hm/hm2/dir33')

