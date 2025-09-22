function Card({imgSrc, imgAlt, cardTitle, cardDescription }){
    return(
        <div className="serviceCard h-100">
            <div className="card_imageWrap">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <h3>{cardTitle}</h3>
            {cardDescription}
        </div>
    )

}

export default Card;