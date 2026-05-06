import path from "node:path";
import fs from "fode:fs";
import fs from "node:fs/promises";




// buffers

const buffer = await fs.readFile("file.txt");
// якщо у файлі hello.txt був текст "Hello World!"
console.log(buffer);

const buffer = await fs.readFile("hello.txt");
console.log(buffer.toString("utf-8")); // Hello World!
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

await fs.unlink("file.txt");
console.log("Файл успішно видалено.");

await fs.appendFile("output.txt", "\nЩе один рядок", "utf8");
console.log("Дані успішно додані у файл.");

await fs.rename("oldfile.txt", "newFile.txt");
console.log("Файл успішно перейменовано.");

fs.writeFileSync("output.txt", "Привіт з Node.js!", "utf8");

await fs.writeFile("output.txt" , "Привіт з Node.js!", "utf8");
console.log("Дані успішно записані у файл.");

// без кодування

const buffer = await fs.readFile("file.txt");
console.log(buffer);

// з кодуванням

const data = await fs.readFile("file.txt", "utf8");
console.log("Вміст файлу:", data);

// приклад без кодування

const buffer = fs.readFileSync("file.txt");
console.log(buffer);
// приклад із кодуванням

const data = fs.readFileSync("file.txt", "utf8");
console.log("Вміст файлу:",data);

const somePath = path.join("some_folder", "some_file.txt");
// абсолютний шлях до робочої директорії
const pathToWorkDir = path.join(process.cwd());
// додаємо нові частини до шляху
const pathToFile = path.join(pathToWorkDir, "some_folder", "some_file.txt");



const message = 'Hello world';

console.log(message);

// Windows

console.log(path.parse("C:\\path\\dir\\file.txt"));

/*
 {
  root: 'C:\\',
  dir: 'C:\\path\\dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
 }
  */
