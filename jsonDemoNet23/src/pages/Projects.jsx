import MyProjects from "../assets/data.json"

export default function Projects(){
    return (
        <section>
                <h2>Made by: {MyProjects.user}</h2>
                { MyProjects.projects.map(proj => {
                        return (
                            <article>
                                <h3>Project name: {proj.name}</h3>
                                <p>{proj.description}</p>
                            </article>
                        )
                    })}
        </section>
    )
}