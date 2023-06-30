export default function Validate (user) {
    let errors = {}

    if(!user.email) {
        errors.mail="Email requiered"
    }
    if(!user.password) {
        errors.password="Password requiered"
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = "Invalid email";
    }
    if (user.password.length < 6 || user.password.length > 10) {
        errors.password = "Password must be 6 to 10 characters";
    }
    if (!/\d/.test(user.password)) {
        errors.password = "Password must contain one number";
    }
    if (user.email.length > 35) {
        errors.email = "Email is too long";
      }

    return errors;
};

