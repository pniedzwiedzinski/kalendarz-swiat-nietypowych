const fs = require('fs-extra');
const fetchCalendar = require('kalendarz-swiat-nietypowych-parser');

const YEAR = new Date().getFullYear();

const main = async () => {
  try {
    const list = await fetchCalendar(YEAR);
    generateApi(list);
  } catch (e) {
    console.error('Error during generating.');
    console.error(e);
  }
};

const mkdir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const months = Array.from(Array(13).keys());
const days = Array.from(Array(32).keys());
months.shift();
days.shift();

const generateApi = (list) => {
  const dir = './dist';
  mkdir(dir);
  console.log(months);
  months.forEach((month) => {
    mkdir(`${dir}/${month}`);
    days.forEach((day) => {
      holidays = list.filter(
        (holiday) => holiday.month === month && holiday.day === day
      );
      fs.writeFile(`${dir}/${month}/${day}.json`, JSON.stringify(holidays));
    });
  });
};

main();
