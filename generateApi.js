const fs = require('fs-extra');
const fetchCalendar = require('kalendarz-swiat-nietypowych-parser');

const YEAR = new Date().getFullYear();

const main = async () => {
  try {
    const list = await fetchCalendar(YEAR);
    await generateApi(list);
  } catch (e) {
    console.error('Error during generating.');
    console.error(e);
  }
};

const months = Array.from(Array(13).keys());
const days = Array.from(Array(32).keys());
months.shift();
days.shift();

const generateApi = async (list) => {
  const dir = './dist';
  await fs.ensureDir(dir);

  const monthPromises = months.map(async month => {
    await fs.ensureDir(`${dir}/${month}`);

    const dayPromises = days.map(async day => {
      const holidays = list.filter(
          (holiday) => holiday.month === month && holiday.day === day
      );
      await fs.writeFile(`${dir}/${month}/${day}.json`, JSON.stringify(holidays));
    });

    dayPromises.push((async () => {
      const holidays = list.filter(
          (holiday) => holiday.month === month
      );
      await fs.writeFile(`${dir}/${month}.json`, JSON.stringify(holidays));
    })());

    return Promise.all([dayPromises]);
  });

  monthPromises.push(fs.writeFile(`${dir}/all.json`, JSON.stringify(list)));

  return Promise.all([monthPromises]);
};

main();
