import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container,Content, Avatar, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Content>
          <Link to="/">
            <ButtonBack />
          </Link>
        </Content>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/JoaoKshesek.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          value="João Valter Kshesek"
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          value="kshesek.joaovalter@gmail.com"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
