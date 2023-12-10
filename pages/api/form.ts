import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { TDataForms } from "types/TDataForms";

const FormAPI = async (req: { body: TDataForms }, res: NextApiResponse) => {
  const {
    fio,
    academicDegree,
    fullNameOrganization,
    legalAddress,
    contactPhone,
    email,
    titleArticle,
    directionConference,
    formParticipation,
    topicScientificReport,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_MAILER,
      pass: process.env.PASSWORD_MAILER,
    },
  });

  const dataHtml = `
        <h2>Заявка</h2>
        <p>ФИО (полностью): ${fio}</p>
        <p>Ученая степень, должность, звание: ${academicDegree}</p>
        <p>Полное наименование организации: ${fullNameOrganization}</p>
        <p>Юр.адрес организации: ${legalAddress}</p>
        <p>Контактный телефон: ${contactPhone}</p>
        <p>E-mail: ${email}</p>
        <p>Название статьи: ${titleArticle}</p>
        <p>Секция, направление работы конференции: ${directionConference}</p>
        <p>Форма участия (очная или заочная): ${formParticipation}</p>
        <p>Тема научного доклада (статьи) при очном: ${topicScientificReport}</p>
    `;
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Заявка на конференцию",
      html: dataHtml,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Произошла ошибка. " + JSON.stringify(error),
    });
  }
  res.status(200).json({ status: "ok", message: "Успешно отправлено!" });
};

export default FormAPI;
