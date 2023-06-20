export const GET_USERS = "SELECT * FROM users";

export const CREATE_USERS = "INSERT INTO users (first_name, last_name, email, phone, password, status, username, gender) VALUES (?,?,?,?,?,?,?,?,?)";

export const GET_USER_WITH_ID = "SELECT * FROM users WHERE id=?";

// Tour Queries
export const GET_TOURS = "SELECT * FROM tours";

export const GET_TOURS_WITH_ID = "SELECT * FROM tours WHERE id=?";

export const CREATE_TOUR = "INSERT INTO `tours`(`name`, `image`, `type`, `destination`, `short_desc`, `description`, `adult_price`, `child_price`, `from_date`, `end_date`, `days`, `nights`, `amenities`, `inclusions`, `exclusions`, `note`, `is_popular`, `status`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

export const UPDATE_TOUR = "UPDATE tours SET name=?, image=?, type=?, destination=?, short_desc=?, description=?, adult_price=?, child_price=?, from_date=?, end_date=?, days=?, nights=?, amenities=?, inclusions=?, exclusions=?, note=?, is_popular=?, status=? WHERE id=?"

export const DELETE_TOUR = "DELETE FROM tours WHERE id=?";

export const TOUR_FILTER = "SELECT * FROM tours WHERE type=? AND destination IN (?)";

// Tour - Itinenrary Queries
export const CREATE_TOUR_ITINERARY = "INSERT INTO tour_itinerary (tour_id, title, day, description, activity, stay, food, status, places_to_visit, travel, image, overview, travel_options, activityIndex) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

export const GET_ALL_TOUR_ITINERARY = "SELECT * FROM tour_itinerary";

export const GET_TOUR_ITINERARY = "SELECT * FROM tour_itinerary WHERE id=?";

export const DELETE_TOUR_ITINERARY = "DELETE FROM tour_itinerary WHERE id=?"

// Auth Queries
export const USER_EXIST = "SELECT id, status, username FROM users WHERE username = ? AND password = ?";

// destinations
export const GET_DESTINATIONS = "SELECT * FROM destination";

// client user registration
export const REGISTRATION = "INSERT INTO client_user (name, contact, email, password) VALUES (?,?,?,?)";

export const CLIENT_USER_EXIST = "SELECT * FROM client_user WHERE email=? AND password=?";

// tour enquiry
export const CREATE_TOUR_ENQUIRY = "INSERT INTO tour_enquiry (name, contact, email, tourist_count, current_city, from_date, end_date, message, created_at) VALUES (?,?,?,?,?,?,?,?,?)";