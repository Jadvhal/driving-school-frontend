import React, { FC, useState } from "react";

import { useAdaptive } from "@/hooks/useAdaptive";

import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

import styles from "./Header.module.scss";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import ExitThin from "@/components/other/Icons/ExitThin";
import InputPrimary from "@/components/ui/Input/InputPrimary/InputPrimary";
import Button from "@/components/ui/Button/Button";
import { AnimatePresence } from "framer-motion";

const Header: FC = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const { isMobile } = useAdaptive();
  return (
    <div className={styles.header}>
      {isMobile ? (
        <HeaderMobile setIsModalShow={setIsModalShow} />
      ) : (
        <HeaderDesktop setIsModalShow={setIsModalShow} />
      )}
      <AnimatePresence>
        {isModalShow && (
          <ModalWrapper
            className={styles.modal}
            isShow={isModalShow}
            setIsShow={setIsModalShow}
          >
            <div className={styles.top}>
              <h4>Вход</h4>
              <button onClick={() => setIsModalShow(false)}>
                <ExitThin />
              </button>
            </div>
            <div className={styles.primary}>
              <InputPrimary title="Эл почта или телефон" name="login" />
              <InputPrimary title="Пароль" name="password" type="password" />
              <button className={styles.miss}>Забыли пароль?</button>
              <Button className={styles.auth} primary>
                Войти
              </Button>
            </div>
            <div className={styles.footer}>
              <p>
                Новый пользователь? <span>Зарегистрируйтесь</span>
              </p>
              <p className={styles.info}>
                Ввод данных подтверждает ваше согласие с{" "}
                <span>политикой конфиденциальности</span> и{" "}
                <span>обработкой персональных данных</span>.
              </p>
            </div>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
