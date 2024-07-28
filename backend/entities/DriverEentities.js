class Driver {
    constructor(
        name,
        email,
        password,
        Experience = 0,
        Phone,
        Model,
        VehicleNumber,
        color,
        isBlocked = false,
        isAdmin = false,
        images = [],
        isVerified = false,
        createdAt = new Date()
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.Experience = Experience;
        this.Phone = Phone;
        this.Model = Model;
        this.VehicleNumber = VehicleNumber;
        this.color = color;
        this.isBlocked = isBlocked;
        this.isAdmin = isAdmin;
        this.images = images;  // Array for multiple image URLs
        this.isVerified = isVerified;
        this.createdAt = createdAt;
    }
}

export default Driver;
