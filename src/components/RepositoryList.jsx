import { RepositoryItem } from "./RepositoryItem";
const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com/unform/unform',
}
const repositoryName = 'unform1';
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem respository={repository}></RepositoryItem>
                <RepositoryItem respository={repository}></RepositoryItem>
                <RepositoryItem respository={repository}></RepositoryItem>
            </ul>
        </section>
    );
}