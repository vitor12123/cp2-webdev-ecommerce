export default function RepoCard({title, image, price}) {
    return(
        <div className="grid-cols-2">
            <div className="border-black-2 mb-40 mx-auto grid grid-cols-2 ">
                <h3>nome:{title}</h3>
                <br/>
                <h3>preço:{price}</h3>
                <br/>
                <img src={image} alt="" />
            </div>
        </div>
    )
}