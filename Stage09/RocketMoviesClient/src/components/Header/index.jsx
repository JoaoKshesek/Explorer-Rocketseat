import { Container,Content, Profile } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/" style={{ color: "#FF859B" }}>
          <h1>RocketMovies</h1>
        </Link>

        <Input placeholder="Pesquise pelo título" />
        <Profile to="/profile">
          <div>
            <strong>João Valter Kshesek</strong>
            <span>sair</span>
          </div>
          <img src="https://github.com/JoaoKshesek.png" />
        </Profile>
      </Content>
    </Container>
  );
}
