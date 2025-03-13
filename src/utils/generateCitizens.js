export const generateCitizens = (num) => {
  const firstNames = ["Иван", "Петр", "Алексей", "Максим", "Сергей"];
  const lastNames = ["Иванов", "Петров", "Алексеев", "Максимов", "Сергеев"];
  const surnames = [
    "Иванович",
    "Петрович",
    "Алексеевич",
    "Максимович",
    "Сергеевич",
  ];
  const statuses = ["Работающий", "Не работающий", "Отпуск", "Больничный"];
  const phoneNumber = 79998880077;
  const email = "test@example.com";
  const roles = [
    "Инженер",
    "Менеджер",
    "Дизайнер",
    "Тестировщик",
    "Программист",
  ];
  const specialties = [
    "Программирование",
    "Тестирование",
    "Проектирование",
    "Дизайн",
  ];
  const genders = ["Мужской", "Женский"];
  const employmentTypes = ["Полная занятость", "Частичная занятость"];
  const teams = ["Разработка ПО", "Маркетинг", "Дизайн", "Менеджмент"];
  const institutions = ["МГТУ", "СПбГУ", "МИФИ", "МГУ", "ВШЭ"];
  const fields = [
    "Программирование",
    "Системный анализ",
    "Дизайн",
    "Маркетинг",
  ];

  const randomDate = (startYear) => {
    const startDate = new Date(startYear, 0, 1);
    const endDate = new Date();
    return new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  };

  const randomYear = (startYear, range) =>
    startYear + Math.floor(Math.random() * range);

  const citizens = [];

  for (let i = 0; i < num; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const specialty =
      specialties[Math.floor(Math.random() * specialties.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const birthDate = randomDate(1980);
    const employmentType =
      employmentTypes[Math.floor(Math.random() * employmentTypes.length)];
    const team = teams[Math.floor(Math.random() * teams.length)];

    const experience = [
      {
        company: 'ООО "ТехноПро"',
        position: "Инженер-разработчик",
        startDate: randomDate(2010),
        endDate: randomDate(2021),
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование систем",
          "Проектирование архитектуры",
        ],
      },
      {
        company: 'АО "ТехноСофт"',
        position: "Старший разработчик",
        startDate: randomDate(2022),
        responsibilities: [
          "Разработка фронтенда",
          "Участие в проектировании",
          "Работа с клиентами",
        ],
      },
    ];

    const education = [
      {
        institution:
          institutions[Math.floor(Math.random() * institutions.length)],
        field: fields[Math.floor(Math.random() * fields.length)],
        startYear: randomYear(2005, 10),
        endYear: randomYear(2010, 5),
      },
    ];

    const citizen = {
      id: i + 1,
      firstName,
      lastName,
      surname,
      status,
      phoneNumber,
      email,
      role,
      specialty,
      gender,
      birthDate,
      employmentType,
      team,
      experience,
      education,
    };

    citizens.push(citizen);
  }

  return citizens;
};
