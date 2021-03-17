import { Button } from "../components/Button";
import { GenreResponseProps } from "../App";

interface SideBarProps {
  id: number;
  genres: GenreResponseProps[];
  onClick: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
