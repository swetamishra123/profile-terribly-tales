
# React Instagram Profile App

This is a React web application that displays a simple Instagram-like profile page and home feed.

## Hosted in Vercel
[demo](https://profile-terribly-tales.vercel.app)
## Components

### 1. `App.js`
- **Description:** Main entry point of the application.
- **Usage:** Renders the main `App` component, which includes the `HomeScreen` component.

### 2. `HomeScreen.js`
- **Description:** React component for rendering the Instagram-like home feed.
- **Usage:** Utilizes the `FlatList` component to display posts with user avatars, names, dates, images, descriptions, and action buttons.

### 3. `App.css`
- **Description:** Stylesheet for the application.
- **Usage:** Contains styles for the overall app layout, posts, avatars, headers, and action buttons.

## Libraries and Plugins

### 1. `react`
- **Description:** JavaScript library for building user interfaces.
- **Usage:** The core library used for creating React components and managing the application state.

### 2. `react-dom`
- **Description:** React package for working with the DOM.
- **Usage:** Used for rendering React components into the HTML document.

### 3. `react-scripts`
- **Description:** Set of scripts and configurations for React projects.
- **Usage:** Provides development and build scripts, making it easier to manage the project.

### 4. `react-router-dom`
- **Description:** Declarative routing for React.js.
- **Usage:** Enables navigation between different components/pages in the application.

## GitHub Repository

The project is hosted on GitHub. You can find it at [swetamishra123/profile-terribly-tales](https://github.com/swetamishra123/profile-terribly-tales).

## Screenshots
<div style="display: flex; justify-content: space-between;">
<img src="https://lh3.googleusercontent.com/pw/ADCreHc7gj36Kav_Kkgjlk99kZyPvROS_18HqDPMiu5FbmukSMLpVOdwb4M_VKoWCx9ixgEBbtAmnpXdNuC-IM8RS9F_2s1hWAIoX0HU6GM9bAuJZr2u8GOuk6x_lPUxMuT3gnA7mvDUiBlt-p_vwEpSGsYeTsfBlopPio9bNo4CdrkJmX6ishT1vvg9C5YoaK3ueUj8cndqfJS0wHzqzUjl6zB7MmAdY2lQrcPi57DY1JAupfKM8eSEvUHabP31f8JhxOzJkOytIv4kkanPjolQ-iIz4GYz5UKwf6UNpr6sn_KVKNyVEgE3VOVNMRujF0RE3dtxQmyaOYxWbuqO0AQWqO9bfE_tq-4uIQ7t1Yiz2YmBGESnAFFdq8F_Jg9CKxFa6DmAvnQBix6CoLx8glvLPuMo1RvGSdpiUi54p5lrteLOZa75MDf6ZN1crn2fIYhstYC4rLuB3NlqK89nQhjmWkEnavtxpUMZ6UI9aq4T1vWRAB3LoI0wjXRmG4Jm2BMoWwQs_XAR8zVTGDHYLB9Lv7NlWzrKdDgUFU3KEurNqbp6GL_HXaipVfKVWG-P_0cfue22gTq32XUwHM6vfZsc-l9AJx_DooJad2ZXXs1f8fwAsoVdYumypIm9KWXvSeYPPlVG97S-TZepDsINzsh__pJhAU5zTgyzlCBi4n4EfzQ16X7v427I0yQaVVqwLjHWGWwASr-Egr6eV3KodJ-DhsbtP-7jCruRy59OYSFzZlhEnDVV9_iLlFpA_te1NIrHrP5MOIjbM3kLv7ZSZpSiUSD7QS7vxSHH3gB6J4TzXWzM_k8ckPR6ij1Q5R7NBNbtNdc9Pa9KN8mvidjvmQvT0MolrysDp3CzkHbwX3MqLALUmmx_viaHMcyIdfLsrRp0NZlEr-KlRIUCZ_I0h6NwLD7lM3D1Quy0GqAT00QF2tIXwi25D8dPhEzQjkdUDliIgIjyWL3kA6yMcnf-rllZTjdfl5NeZgTEIEtSb2HjI2hto34sCj9ZWxwDKyo6r3FfZZc=w395-h884-s-no-gm?authuser=1">
<img src="https://lh3.googleusercontent.com/pw/ADCreHdBDyZ1WmFuiG-R5u_je-IYlC-wpmwfZCex-iKuPWnokJpvHNQrVvS0Brnxl65KK1umrJWBTzwW0HA9CrCffMJ0ahC8TnXNI2B0eJdJ0oHCkwMgK7RiOCqQm3hEen70QFSA7CsxYbyg6Y7z4QHvuPpyNfAVrauyzPCe2_IiucqS8wXIV9ZwBKzcb96Y-oS4jBGBb76OPd7UgXpp4IaDRcG36B2HQGS8ueZYjykYFf84zfxN0ExFJFKaj8_8tVYZF-Ylr9ckJuYJZ_6lN2Ad0GcsSqDhH9b71thlp9Mc15rXzB2OvBchyvcC0FG-0ViKaErbKvvmq1qnUoMC58ayV2NZOBqvDAGcyIzC7PY3u5m3dPAzJZ122Je1bp86zwbuSWQFwEF2CCH7cYir6PiryHJ0C7csHcq5otQl_30-kxtZfzdLn8iJoqybst54_-xfWHzHwMC8dxLHC22dGX1E7AKy2K7n-R80hBHf2650Ogrc3-kZqfV8ADcW2tZd4st_5nPPfGkEsymEnzJwHfrZBifTIVmodrv399-1F2vCujwZYDC7AK2VsFNVeQvtnr8ktnyWLvBMC1wINlkYXDVV_ZgZIQbLyFhfvhxqSFkO6Zs2DNc0Wr6rT3wzvUWkEpVfVLsskfhEuNwljHIc99tLm61t_XUM4w7v_9BrKVjaSxhHPnv1l8_G-RXzk2rnOEPfvnoJqKEv1TN7hrl5SIM4kL4oiuAbZdbtBZVFxUg6kmD2gEzhKTGcF9sST5e-cN_RXCcpY7GwiUEs8FdUKf7tsCGa_OKKry6VAitGK9gcwKqIL-MstUSCm1zSstOtvWSg50C6BL2BsJv_mUV6WH-F9TebD69kMdFmflB0ZlO0fbmtIAKL2pVgefcTdN7trYMaM1BkkFP8ea6zb18psoDxtnS_XqbcFBBv0N-zxWdIxDyofYBZ0oesTiByUVT54dzl6gIvRYdVfBeW4EN0LgOjfOSTI8PhsURdYfCMcziDej3Mig7qjnZWlefw0W4E4Fta0PE=w395-h884-s-no-gm?authuser=1">
</div>

## How to Run

1. Clone the repository.
   ```bash
   git clone https://github.com/swetamishra123/profile-terribly-tales.git
   cd profile-terribly-tales
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

