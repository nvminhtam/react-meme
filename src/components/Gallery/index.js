function Gallery({meme}) {
    return (<img key={meme.id} src={meme.url} className='col-md-4'></img>);
}
export default Gallery;