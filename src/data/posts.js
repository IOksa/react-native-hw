import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import imageUser1 from '../assets/images/user1.png';
import imageUser2 from '../assets/images/user2.png';

export const POSTS =[
    {
        "id": "1",
        "path": "https://res.cloudinary.com/dk9nurg6u/image/upload/v1697832954/buick_enclave_dbgssn.jpg",
        "title": "Ліс",
        "comments": 3,
        "likes": 0,
        "coords": { "latitude": 47.0392091, "longitude": 10.3328469 },
        "locationDescription": "Ivano-Frankivs'k Region, Ukraine",
        "commentsData": [{
                "commentsId":"1",
                "userId": "22222",
                "photoUser":imageUser2,
                "commentText": "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                "date": "09 червня, 2020 | 08:40 "
            },
            {
                "commentsId":"2",
                "userId": "11111",
                "photoUser":imageUser1,
                "commentText": "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.!",
                "date": "09 червня, 2020 | 09:14"
            },
            {
                "commentsId":"3",
                "userId": "22222",
                "photoUser":imageUser2,
                "commentText": "Thank you! That was very helpful!",
                "date": "09 червня, 2020 | 09:20"
            },
        ]  

    },
    {
        "id": "2",
        "path": "https://res.cloudinary.com/dk9nurg6u/image/upload/v1697832937/volvo_xc90_qcev2n.jpg",
        "title": "Захід на Чорному морі",
        "comments": 2,
        "likes": 0,
        "coords": { "latitude": 50.388803, "longitude": 30.686109 },
        "locationDescription": "Захід на Чорному морі, Ukraine",
        "commentsData": [{
            "commentsId":"1",
            "userId": "22222",
            "photoUser":imageUser2,
            "commentText": "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            "date": "09 червня, 2022 | 08:40 "
        },
        {
            "commentsId":"2",
            "userId": "11111",
            "photoUser":imageUser1,
            "commentText": "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.!",
            "date": "09 червня, 2022 | 09:14"
        },
       
    ]    
    },
    {
        "id": "3",
        "path": "https://res.cloudinary.com/dk9nurg6u/image/upload/v1697833292/2020-volvo-xc60_100730027_h_p11cag.jpg",
        "title": "Старий будиночок у Венеції",
        "comments": 0,
        "likes": 0,
        "coords": { "latitude": 47.0392091, "longitude": 10.3328469 },
        "locationDescription": "Italy",
        "commentsData":[]
    }




]
