export const GET_USERS = "SELECT * FROM users";

export const CREATE_USERS = "INSERT INTO users (id, first_name, last_name, email, phone, password, status, username, gender) VALUES (?,?,?,?,?,?,?,?,?)";

export const GET_USER_WITH_ID = "SELECT * FROM users WHERE id=?";

// Tour Queries
export const GET_TOURS = "SELECT * FROM tours";

export const GET_TOURS_WITH_ID = "SELECT * FROM tours WHERE id=?";

export const CREATE_TOUR = "INSERT INTO `tours`(`id`, `name`, `image`, `type`, `destination`, `short_desc`, `description`, `price`, `days`, `nights`, `amenities`, `inclusions`, `exclusions`, `note`, `status`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

export const DELETE_TOUR = "DELETE FROM tours WHERE id=?";

// Tour - Itinenrary Queries
export const CREATE_TOUR_ITINERARY = "INSERT INTO tour_itinerary (tour_id, title, day, description, activity, stay, food, status, places_to_visit, travel, image, overview, travel_options) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

export const GET_ALL_TOUR_ITINERARY = "SELECT * FROM tour_itinerary";

export const GET_TOUR_ITINERARY = "SELECT * FROM tour_itinerary WHERE id=?";

export const DELETE_TOUR_ITINERARY = "DELETE FROM tour_itinerary WHERE id=?"

// Auth Queries
export const USER_EXIST = "SELECT id, status, username FROM users WHERE username = ? AND password = ?";