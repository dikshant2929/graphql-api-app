import * as path from 'path';
import * as fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const loadGQLFile = (type) => {
  const filePath = path.join(__dirname, '../api', type)
  return fs.readFileSync(filePath, 'utf-8')
}