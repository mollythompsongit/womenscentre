import { useAxios } from "use-axios-client"
import AOS from 'aos'
import 'aos/dist/aos.css';

// // grab our endpoint url from our .env.development
// const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// // http://localhost:8888/womenscentre/wp-json/wp/v2/posts?_embed 
// // `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/posts?_embed` 
// const AllNews = () => {
//     const endpoint = baseUrl + "posts?_embed"
//     const { data: womensPosts, error, loading } = useAxios({
//         url: endpoint
//     })

//     // check if the news posts have been returned
//     if (loading) return (
//         <p>Loading...</p>
//     )
//     if (!womensPosts) return "No posts found"
//     if (error) return "Error"

//     console.log(womensPosts)

//     const showwomensPosts = womensPosts.map((post, index) => {

//         // check if the featured image exists, if not then use a placeholder
//         const GetImageOrPlaceholder = () => {
//             if (post._embedded['wp:featuredmedia']) {
//                 return (
//                     <img className="aboutus-images" src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
//                 )
//             } else {
//                 return (
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="Placeholder" />
//                 )
//             }
//         }
//         AOS.init()
//         return (
//             <div data-aos="flip-up" id={index} className="item" key={index}>
//                 <h3 className="aboutus-titles">{post.title.rendered}</h3>
//                 <div className="aboutus-text">
//                     <div className="post-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                     <GetImageOrPlaceholder />
//                 </div>
//                 {/* <GetImageOrPlaceholder /> */}
//             </div>
//         )
//     })
//     return showwomensPosts
// }

const News = () => {
    return (
        <div id="news">
            <div className="whatweoffer-container">
                <img className="whatweoffer-image" src="/img/aboutusbanner.png" />
                <h1 className="whatweoffer-header">About Us</h1>
            </div>
            <div className="aboutus-header-container">
                <p className="aboutus-header-subtext">The Centre was initially established as a community link for Women’s Refuge, where women leaving Refuge could obtain ongoing support and resources. Since the mid-nineties, with Refuges starting their own community support, the Centre’s client base has opened up, with a wide range of women now accessing our services.  For many women the Centre is a place to gather information, work through difficult issues, be supported, learn, and or rest before going out into the wider world again.

                    We have extensive networking contacts, and if we cannot assist you with any of our specialised services we can provide information/links to appropriate agencies and organisations that can give further assistance.

                    The Centre is registered as a charitable entity under the Charities Act 2005 under registration number CC10043.</p>
                <div className="ourteam-title-vision">
                    <h2>Our Vision</h2>
                    <p className="vision-subtext">A world in which all women have equal rights and opportunities.</p>
                </div>
            </div>
            <div className="ourteam-title">
                <h2>Our Team</h2>
            </div>
            <div id="item-container">
                <div className="item" >
                    <h3 className="aboutus-titles">Nancy Aldridgea </h3>
                    <div className="aboutus-text">
                        <img className="aboutus-images" src="https://images.squarespace-cdn.com/content/v1/50556389c4aad0824d1f0d56/116b066c-bc5b-4a7d-92e1-1e70e86cd6cb/89493A78-671F-47CA-8E36-49279652D091.jpg?format=500w"></img>
                        <div className="post-text">My name is Nancy Aldridge, I’m originally from Egypt and has been living in New Zealand for the last 15 years. I’m married to a Kiwi and we have two children, one nine and the other 10 years old. I’m currently studying Counselling at Laidlaw College. I began my counselling study in 2020 because I love working with people and I want to be able to help them through the difficulties they face in their lives. My previous life experience was teaching English as a second language in New Zealand, Egypt and Jordan. I also worked with a Christian missions organisation (YWAM) in the Middle East. Outside of work/study, I like to socialise with friends and family, eat yummy food and watch good movies. I’m very happy to have the opportunity to  the Women’s Centre this year.
                        </div>
                    </div>
                </div>

                <div className="item" >
                    <h3 className="aboutus-titles">Esther Vulma </h3>
                    <div className="aboutus-text">
                        <img className="aboutus-images" src="https://images.squarespace-cdn.com/content/v1/50556389c4aad0824d1f0d56/ca8ea672-4fe1-4105-ac2b-99dbefbcc2de/ESTHER.jpg?format=500w"></img>
                        <div className="post-text">Ni sa Bula Vinaka!
                            Esther is a proud and passionate Pasifika woman. She is Fiji born and moved to Aotearoa New Zealand at the young age of 9. She is a Counsellor here at the Women’s Centre, and is very passionate in providing a safe, warm and empowering space for women from all walks of life. Walking along side them on their journey in life.
                        </div>
                    </div>
                </div>

                <div className="item" >
                    <h3 className="aboutus-titles">Julie Nolan </h3>
                    <div className="aboutus-text">
                        <img className="aboutus-images" src="https://images.squarespace-cdn.com/content/v1/50556389c4aad0824d1f0d56/9dd85b26-0bf0-41cc-a891-07189fb9148a/Julie+Nolan+Bio.jpg?format=500w"></img>
                        <div className="post-text"> Julie Nolan is currently a student of PGCert Counselling Studies at University of Canterbury, a yoga teacher and mother. After a successful IT career Julie returned to her original passion of working with others, holding space while they navigate and move their lives forward. She values personal growth, people connection and a sense of fun. These values inform her work, providing an empathic self-exploration, easy relationship building and a relaxed safe environment. Outside of work Julie reads, walks, and dances like no-one is watching.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News