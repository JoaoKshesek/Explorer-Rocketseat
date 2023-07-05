import { Link } from "react-router-dom";
import ReactStars from "react-rating-star-with-type";
import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/ButtonBack";
import { Tag } from "../../components/Tag";
import {
  Container,
  Content,
  MovieHeader,
  Rating,
  Info,
  InfoContent,
  Avatar,
  Tags,
  Description,
} from "./styles";
import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";
import clock from "../../assets/clock.svg";

export function MoviePreview() {
  const movie = {
    id: 1,
    title: "Interestellar",
    description:
      'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann, nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.',
    rating: 4,
    tags: [
      {
        id: 1,
        name: "Ficção Científica",
      },
      {
        id: 2,
        name: "Drama",
      },
      {
        id: 3,
        name: "Família",
      },
    ],
    autor: "João Valter Kshesek",
    date: "05/07/2023",
    time: "08:00",
  };

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Link to="/" style={{ display: "flex", width: 80 }}>
            <ButtonBack />
          </Link>

          <MovieHeader>
            <h1>Novo filme</h1>
            <Rating>
              <ReactStars
                value={movie.rating}
                filledIcon={<img src={starFilled} width={20} height={20} />}
                emptyIcon={<img src={star} width={20} height={20} />}
              />
            </Rating>
          </MovieHeader>

          <Info>
            <InfoContent>
              <Avatar>
                <img
                  src="https://github.com/JoaoKshesek.png"
                  alt="Foto do usuário"
                />
              </Avatar>
              Por {movie.autor}
            </InfoContent>
            <InfoContent>
              <img src={clock} alt="" />
              {movie.date} às {movie.time}
            </InfoContent>
          </Info>
          <Tags>
            {movie.tags.map((tag) => (
              <Tag title={tag.name} color="#282124" />
            ))}
          </Tags>
          <Description>{movie.description}</Description>
        </main>
      </Content>
    </Container>
  );
}
