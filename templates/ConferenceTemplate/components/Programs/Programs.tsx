import { H2, H3 } from "@components";
import { Section, Wrapper } from "@layout";
import { TProgram } from "@types";
import style from "./Programs.module.scss";

type TProps = {
  program: TProgram;
};

export const Programs = ({ program }: TProps) => {
  return (
    <Section className={style.programs}>
      <Wrapper>
        <H2 className={style.h2}>{program.title}</H2>
        <H3>{program.description}</H3>
        <ul className={style.listPrograms}>
          {program.ProgramDetails.map((programDetails) => (
            <li key={programDetails.detail} className={style.itemPrograms}>
              <span className={style.timeProgram}>{programDetails.time}</span>
              <span className={style.nameProgram}>{programDetails.detail}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
};
