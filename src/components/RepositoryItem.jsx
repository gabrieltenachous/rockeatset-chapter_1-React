export function RepositoryItem(props) {
    return (
        <li>
            {/* caso não exista props.respository?.name */}
            <strong>{props.respository.name}</strong>
            <p>{props.respository.description}</p>
            <a href={props.respository.html_url}>
                Acessar Repositório
            </a>
        </li>
    );
}