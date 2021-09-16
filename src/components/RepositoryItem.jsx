export function RepositoryItem(props) {
    return (
        <li>
            {/* caso não exista props.respository?.name */}
            <strong>{props.respository.name ?? 'Default'}</strong>
            <p>{props.respository.description}</p>
            <a href={props.respository.link}>
                Acessar Repositório
            </a>
        </li>
    );
}