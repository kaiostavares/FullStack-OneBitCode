const dayjs = require("dayjs");

function birthday(date){
  const birthday = dayjs(date);
  const today = dayjs();
  const age = today.diff(birthday, 'year');
  const nextBirthday = birthday.add(age + 1,'year');
  const daysToNextBirthday = nextBirthday.diff(today,'day') + 1;

  console.log(`Sua idade é de ${age} anos`);
  console.log(`Sua próxima data de aniversário é ${nextBirthday.format('DD/MM/YYYY')}`);
  console.log(`Falta ${daysToNextBirthday} dias para seu aniversário`)
}

console.log(birthday('06-08-2002'))