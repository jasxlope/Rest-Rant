# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | \* | 404 page (matches any route not defined above) |

| Name | String | The name of the restaurant |
| City | String | The city where the restaurant is located |
| State | String | The state where the restaurant is located |
| Cuisines | String | The type of cuisines offered by the restaurant |
| Pic | String | URL or file path to the picture of the restaurant |
