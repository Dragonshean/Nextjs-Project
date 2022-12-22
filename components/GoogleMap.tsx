




export default function GoogleMap () {
    return (
        <section className="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5844926408035!2d121.54040221423874!3d25.04817124387886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdea7b7aae3%3A0xbb73863323e56409!2z5Yex6Jap6KW_6aSQ54mb5o6S!5e0!3m2!1szh-TW!2stw!4v1663641782651!5m2!1szh-TW!2stw"
                width="600" height="450" style={{border:0}} allowFullScreen={false} loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade"} />
        </section>
    )
}