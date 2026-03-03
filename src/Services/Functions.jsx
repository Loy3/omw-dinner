import starIcon from "../Assets/Icons/star.png";
import starHalfIcon from "../Assets/Icons/star-half.png";
import starGreyIcon from "../Assets/Icons/star-gray.png";

// Nav bar functions
export const HandleMenu = (type) => {
    let menu = document.getElementById("routes");
    let close = document.getElementById("close-btn");
    const buttons = menu.querySelectorAll("button");
    switch (type) {
        case "open":
            buttons.forEach(button => {
                button.style.display = 'block';
            });
            menu.style.display = "flex";
            close.style.display = "block";
            break;

        default:
            close.style.display = "none";
            buttons.forEach(button => {
                button.style.display = 'none';
            });
            menu.classList.add("routes-close");
            setTimeout(() => {
                menu.style.display = "none";
                menu.classList.remove("routes-close");
                menu.classList.add("routes");
            }, 250);
            break;
    }
}

export const HandleRate = ({ rate }) => {
    const maxStars = 5;

    const renderStars = () => {
        const stars = [];
        const rt = parseFloat(rate);

        for (let i = 1; i <= maxStars; i++) {
            let imageSrc = "";

            if (i <= rt) {
                imageSrc = starIcon;
            } else if (i - 0.5 <= rate) {
                imageSrc = starHalfIcon;
            } else {
                imageSrc = starGreyIcon;
            }

            stars.push(
                <img
                    key={i}
                    src={imageSrc}
                    alt={`star-${i}`}
                // style={{ width: '24px', height: '24px' }}
                />
            );
        }

        return stars;
    };

    return <div className="star-container">{renderStars()}</div>;
}


export const HandleMenuItems = (type, displayArr, mainArr) => {
    let itms = [];
    let count = 0;

    if (type === "next") {

        for (let m = 0; m < mainArr.length; m++) {
            if (displayArr[3].title === mainArr[m].title) {
                count = m;
            }
        }

        count++;

        if (count >= mainArr.length) {
            count = 0;
        }

        itms = [...displayArr.slice(1), mainArr[count]];

    } else {

        for (let m = 0; m < mainArr.length; m++) {
            if (displayArr[0].title === mainArr[m].title) {
                count = m;
            }
        }

        count--;

        if (count < 0) {
            count = mainArr.length - 1;
        }

        itms = [mainArr[count], ...displayArr.slice(0, -1)];
    }

    return itms;
}


// handle images
export const HandleNext = (img, galleryArr) => {
    let num = 0;

    for (let a = 0; a < galleryArr.length; a++) {
        if (img === galleryArr[a]) {
            num = a;
        }
    }

    num++;

    if (num > galleryArr.length - 1) {
        num = 0
    }

    return galleryArr[num];

}

export const HandlePrev = (img, galleryArr) => {
    let num = 0;

    for (let a = 0; a < galleryArr.length; a++) {
        if (img === galleryArr[a]) {
            num = a;
        }
    }

    num--;

    if (num < 0) {
        num = galleryArr.length - 1;
    }

    return galleryArr[num];

}

// End of nav bar functions



// // store message
// export const HandleSentMessage = async (msgContent) => {
//     const messagesDocRef = collection(db, 'messages');

//     try {
//         await addDoc(messagesDocRef, { ...msgContent, date: FormattedDate() });
//         return "Message added successfully.";
//     } catch (error) {
//         console.error("Error adding message to Firestore:", error);
//     }
// }


// // get messages
// export const GetMessages = async () => {

//     const collectionRef = collection(db, 'messages');

//     const snapshot = await getDocs(collectionRef);
//     const messages = [];
//     snapshot.forEach((doc) => {
//         messages.push({ id: doc.id, ...doc.data() });
//     });

//     const sortedData = [...messages].sort((a, b) => {
//         const dateA = (a.date.seconds * 1000) + Math.floor(a.date.nanoseconds / 1000000);
//         const dateB = (b.date.seconds * 1000) + Math.floor(b.date.nanoseconds / 1000000);

//         return dateB - dateA;
//     });

//     return sortedData;

// }


// // formate phone number
// export const FormatPhoneNumber = (phoneNumber) => {
//     const cleaned = ('' + phoneNumber).replace(/\D/g, '');

//     if (cleaned.startsWith('0')) {
//         const formatted = `+27 ${cleaned.slice(1, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
//         return formatted;
//     }

//     return phoneNumber;
// };

// // formated date
// export const FormattedDate = () => {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     const today = new Date();
//     const dayOfWeek = daysOfWeek[today.getDay()];
//     const dayOfMonth = today.getDate();
//     const monthOfYear = monthsOfYear[today.getMonth()];
//     const year = today.getFullYear();
//     let day = "";
//     if (dayOfMonth < 10) {
//         day = "0" + dayOfMonth;
//     } else {
//         day = dayOfMonth.toString();
//     }
//     const formattedDate = `${dayOfWeek}, ${day} ${monthOfYear} ${year}`;

//     return formattedDate;
// }


// // shorten date
// export const HandleConvertDate = (date) => {

//     const splitDate = date.split(', ');
//     if (splitDate.length < 2) {
//         return date;
//     }

//     const weekday = splitDate[0]; // "Monday"
//     const restOfDate = splitDate[1]; // "21 April 2025"

//     let shortWeekday;
//     switch (weekday) {
//         case 'Monday': shortWeekday = 'Mon'; break;
//         case 'Tuesday': shortWeekday = 'Tue'; break;
//         case 'Wednesday': shortWeekday = 'Wed'; break;
//         case 'Thursday': shortWeekday = 'Thu'; break;
//         case 'Friday': shortWeekday = 'Fri'; break;
//         case 'Saturday': shortWeekday = 'Sat'; break;
//         case 'Sunday': shortWeekday = 'Sun'; break;
//         default: shortWeekday = weekday;
//     }

//     return `${shortWeekday}, ${restOfDate}`;
// }


// // return initials
// export const HandleInitials = (fullName) => {
//   if (!fullName || typeof fullName !== 'string') {
//     return ''; // Return empty string for invalid input
//   }

//   // Trim whitespace and split the name into words
//   const nameParts = fullName.trim().split(/\s+/); // Splits by one or more spaces

//   // Map each word to its first character (converted to uppercase)
//   const initials = nameParts.map(part => part[0]?.toUpperCase() || '').join('');

//   return initials;
// };