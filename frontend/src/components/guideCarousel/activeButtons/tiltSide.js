import { useTheme } from '@mui/material/styles'
import { TiltSideAction } from '../buttonActions'

const TiltSide = () => {
  const theme = useTheme()
  const activeButtonColor = theme.palette.text.guideActiveButton

  return (
    <svg width="184" height="41" viewBox="0 0 184 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g data-action={TiltSideAction.TILT_LEFT}>
        <rect x="109.973" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M130.288 17.945C129.351 17.7521 128.434 18.3549 128.241 19.2934L126.755 26.5101C126.575 27.3829 127.087 28.2371 127.914 28.5056L127.602 29.5484L127.178 32.681L126.325 34.6066C125.968 34.7509 125.687 35.0666 125.603 35.4723C125.47 36.1179 125.885 36.7493 126.531 36.8821C127.177 37.015 127.808 36.5993 127.941 35.9536C128.012 35.608 127.927 35.2666 127.732 35.0037L127.884 32.8524L129.042 29.7612L129.331 28.3628V28.3528C129.738 28.1128 130.047 27.7085 130.149 27.2086L131.635 19.992C131.828 19.0549 131.225 18.1378 130.287 17.945H130.288Z" fill="#28BDEB"/>
        <path d="M143.7 17.9264C142.759 17.7564 141.857 18.3821 141.687 19.3235L140.379 26.5743C140.285 27.0986 140.436 27.61 140.752 27.99L140.503 29.3656L140.427 32.6653L139.765 34.7252C139.49 34.898 139.288 35.1794 139.226 35.5237C139.109 36.1722 139.54 36.7936 140.189 36.9107C140.837 37.0279 141.459 36.5965 141.576 35.9479C141.65 35.5365 141.505 35.1366 141.222 34.8694L141.147 32.7696L141.92 29.7041L142.02 28.6142C142.869 28.647 143.634 28.05 143.789 27.19L145.097 19.9391C145.267 18.9978 144.641 18.0964 143.7 17.9264Z" fill="#28BDEB"/>
        <path d="M138.484 17.9135L137.777 17.8478C137.721 17.8421 137.672 17.8835 137.667 17.9378L137.274 21.6047C137.249 21.8047 137.357 22.0232 137.542 22.1004L138.292 22.4061C138.482 22.4846 138.571 22.4432 138.624 22.3804C138.679 22.3132 138.711 22.2104 138.732 22.0332L139.089 18.6649C139.129 18.2892 138.856 17.9535 138.482 17.9135H138.484ZM135.868 17.7478L135.482 21.4161C135.464 21.6161 135.314 21.8075 135.115 21.8447L134.318 21.9875C134.117 22.0247 134.037 21.9647 134 21.8918C133.958 21.8147 133.95 21.7061 133.965 21.529L134.323 18.1607C134.363 17.785 134.698 17.5136 135.074 17.5536L135.778 17.6379C135.834 17.645 135.872 17.6936 135.867 17.7493L135.868 17.7478ZM139.318 15.9523L134.644 15.4566C133.698 15.3566 132.851 16.0423 132.75 16.9865L132.254 21.6604C132.154 22.6061 132.84 23.4531 133.784 23.5546L138.458 24.0502C139.404 24.1502 140.251 23.4646 140.352 22.5203L140.848 17.8464C140.948 16.9008 140.262 16.0537 139.318 15.9523ZM139.042 22.2989C139.008 22.6261 138.715 22.8618 138.388 22.8275L134.134 22.3761C133.807 22.3418 133.571 22.049 133.605 21.7218L134.034 17.6793C134.068 17.3522 134.361 17.1165 134.688 17.1507L138.942 17.6021C139.269 17.6364 139.505 17.9293 139.471 18.2564L139.042 22.2989Z" fill="#28BDEB"/>
        <path d="M132.519 24.3516L132.469 24.4102L132.176 25.3487L131.881 27.3414L131.132 28.9756C131.058 29.0542 131.004 29.1542 130.978 29.267C130.905 29.5984 131.115 29.927 131.448 29.9998C131.779 30.0727 132.108 29.8627 132.181 29.5298C132.201 29.4384 132.199 29.347 132.181 29.2599L132.331 27.4571L133.095 25.4959L133.289 24.6059L133.283 24.5174L132.521 24.3502L132.519 24.3516Z" fill="#28BDEB"/>
        <path d="M138.878 27.7257L139.318 25.7587L139.381 24.7774L139.355 24.7045L138.584 24.5859L138.547 24.6659L138.41 25.5659L138.418 27.67L137.911 29.407C137.861 29.4799 137.827 29.5656 137.812 29.6584C137.761 29.9941 137.992 30.3084 138.328 30.3598C138.664 30.4112 138.978 30.1798 139.029 29.8441C139.047 29.7298 139.031 29.617 138.991 29.517L138.879 27.7228L138.878 27.7257Z" fill="#28BDEB"/>
        <path d="M120.44 27.7228V24.6559H122.027V22.3546L125.633 26.1886L122.027 30.0226V27.7214H120.44V27.7228Z" fill="#28BDEB"/>
        <path d="M117.799 12.2416V11.3816L121.159 6.5616H122.539V11.2516H123.469V12.2416H122.539V13.7616H121.419V12.2416H117.799ZM121.469 7.7216L119.109 11.2516H121.469V7.7216Z" fill="#28BDEB"/>
        <path d="M164.297 14.64V25H163.023V14.64H164.297ZM173.469 20.87C173.469 21.1127 173.455 21.3693 173.427 21.64H167.295C167.341 22.396 167.598 22.9887 168.065 23.418C168.541 23.838 169.115 24.048 169.787 24.048C170.337 24.048 170.795 23.922 171.159 23.67C171.532 23.4087 171.793 23.0633 171.943 22.634H173.315C173.109 23.3713 172.699 23.9733 172.083 24.44C171.467 24.8973 170.701 25.126 169.787 25.126C169.059 25.126 168.405 24.9627 167.827 24.636C167.257 24.3093 166.809 23.8473 166.483 23.25C166.156 22.6433 165.993 21.9433 165.993 21.15C165.993 20.3567 166.151 19.6613 166.469 19.064C166.786 18.4667 167.229 18.0093 167.799 17.692C168.377 17.3653 169.04 17.202 169.787 17.202C170.515 17.202 171.159 17.3607 171.719 17.678C172.279 17.9953 172.708 18.434 173.007 18.994C173.315 19.5447 173.469 20.17 173.469 20.87ZM172.153 20.604C172.153 20.1187 172.045 19.7033 171.831 19.358C171.616 19.0033 171.322 18.7373 170.949 18.56C170.585 18.3733 170.179 18.28 169.731 18.28C169.087 18.28 168.536 18.4853 168.079 18.896C167.631 19.3067 167.374 19.876 167.309 20.604H172.153ZM178.272 18.378H176.662V25H175.388V18.378H174.394V17.328H175.388V16.782C175.388 15.9233 175.608 15.298 176.046 14.906C176.494 14.5047 177.208 14.304 178.188 14.304V15.368C177.628 15.368 177.232 15.48 176.998 15.704C176.774 15.9187 176.662 16.278 176.662 16.782V17.328H178.272V18.378ZM181.312 18.378V22.9C181.312 23.2733 181.391 23.5393 181.55 23.698C181.708 23.8473 181.984 23.922 182.376 23.922H183.314V25H182.166C181.456 25 180.924 24.8367 180.57 24.51C180.215 24.1833 180.038 23.6467 180.038 22.9V18.378H179.044V17.328H180.038V15.396H181.312V17.328H183.314V18.378H181.312Z" fill={activeButtonColor}/>
      </g>
      <g data-action={TiltSideAction.TILT_RIGHT}>
        <rect x="0.5" y="0.5" width="39.4732" height="39.4732" rx="3.5" fill="#28BDEB" stroke="#28BDEB"/>
        <path d="M8.71534 8.2716C8.75534 7.6516 8.99201 7.16826 9.42534 6.8216C9.86534 6.47493 10.4253 6.3016 11.1053 6.3016C11.572 6.3016 11.9753 6.38493 12.3153 6.5516C12.6553 6.71826 12.912 6.94493 13.0853 7.2316C13.2587 7.51826 13.3453 7.8416 13.3453 8.2016C13.3453 8.61493 13.2353 8.96826 13.0153 9.2616C12.7953 9.55493 12.532 9.7516 12.2253 9.8516V9.8916C12.6187 10.0116 12.9253 10.2316 13.1453 10.5516C13.3653 10.8649 13.4753 11.2683 13.4753 11.7616C13.4753 12.1549 13.3853 12.5049 13.2053 12.8116C13.0253 13.1183 12.7587 13.3616 12.4053 13.5416C12.052 13.7149 11.6287 13.8016 11.1353 13.8016C10.4153 13.8016 9.82201 13.6183 9.35534 13.2516C8.89534 12.8783 8.64868 12.3449 8.61534 11.6516H9.71534C9.74201 12.0049 9.87868 12.2949 10.1253 12.5216C10.372 12.7416 10.7053 12.8516 11.1253 12.8516C11.532 12.8516 11.8453 12.7416 12.0653 12.5216C12.2853 12.2949 12.3953 12.0049 12.3953 11.6516C12.3953 11.1849 12.2453 10.8549 11.9453 10.6616C11.652 10.4616 11.1987 10.3616 10.5853 10.3616H10.3253V9.4216H10.5953C11.1353 9.41493 11.5453 9.32493 11.8253 9.1516C12.112 8.97826 12.2553 8.70493 12.2553 8.3316C12.2553 8.0116 12.152 7.75826 11.9453 7.5716C11.7387 7.37826 11.4453 7.2816 11.0653 7.2816C10.692 7.2816 10.402 7.37826 10.1953 7.5716C9.98868 7.75826 9.86534 7.9916 9.82534 8.2716H8.71534Z" fill="white"/>
        <path d="M26.6554 17.945C27.5925 17.7521 28.5096 18.3549 28.7024 19.2934L30.188 26.5101C30.368 27.3829 29.8566 28.2371 29.0295 28.5056L29.3409 29.5484L29.7652 32.681L30.618 34.6066C30.9751 34.7509 31.2565 35.0666 31.3408 35.4723C31.4736 36.1179 31.058 36.7493 30.4123 36.8821C29.7666 37.015 29.1352 36.5993 29.0024 35.9536C28.931 35.608 29.0167 35.2666 29.2109 35.0037L29.0595 32.8524L27.901 29.7612L27.6125 28.3628V28.3528C27.2054 28.1128 26.8968 27.7085 26.794 27.2086L25.3084 19.992C25.1155 19.0549 25.7183 18.1378 26.6569 17.945H26.6554Z" fill="white"/>
        <path d="M13.2433 17.9264C14.1846 17.7564 15.086 18.3821 15.256 19.3235L16.5644 26.5743C16.6587 27.0986 16.5073 27.61 16.1916 27.99L16.4402 29.3656L16.5159 32.6653L17.1787 34.7252C17.4529 34.898 17.6558 35.1794 17.7172 35.5237C17.8343 36.1722 17.4029 36.7936 16.7544 36.9107C16.1059 37.0279 15.4845 36.5965 15.3674 35.9479C15.2931 35.5365 15.4388 35.1366 15.7216 34.8694L15.7959 32.7696L15.0231 29.7041L14.9231 28.6142C14.0746 28.647 13.309 28.05 13.1547 27.19L11.8462 19.9391C11.6762 18.9978 12.3019 18.0964 13.2433 17.9264Z" fill="white"/>
        <path d="M18.4597 17.9135L19.1668 17.8478C19.2225 17.8421 19.2711 17.8835 19.2768 17.9378L19.6696 21.6047C19.6939 21.8047 19.5868 22.0232 19.4011 22.1004L18.6511 22.4061C18.4612 22.4846 18.3726 22.4432 18.3197 22.3804C18.264 22.3132 18.2326 22.2104 18.2112 22.0332L17.8541 18.6649C17.8141 18.2892 18.0869 17.9535 18.4612 17.9135H18.4597ZM21.0753 17.7478L21.4609 21.4161C21.4795 21.6161 21.6295 21.8075 21.8281 21.8447L22.6251 21.9875C22.8266 22.0247 22.9065 21.9647 22.9437 21.8918C22.9851 21.8147 22.9937 21.7061 22.978 21.529L22.6209 18.1607C22.5809 17.785 22.2452 17.5136 21.8695 17.5536L21.1652 17.6379C21.1095 17.645 21.071 17.6936 21.0767 17.7493L21.0753 17.7478ZM17.6255 15.9523L22.2994 15.4566C23.2451 15.3566 24.0922 16.0423 24.1936 16.9865L24.6893 21.6604C24.7893 22.6061 24.1036 23.4531 23.1594 23.5546L18.4854 24.0502C17.5398 24.1502 16.6927 23.4646 16.5913 22.5203L16.0956 17.8464C15.9956 16.9008 16.6813 16.0537 17.6255 15.9523ZM17.9012 22.2989C17.9355 22.6261 18.2283 22.8618 18.5554 22.8275L22.8094 22.3761C23.1365 22.3418 23.3722 22.049 23.3379 21.7218L22.9094 17.6793C22.8751 17.3522 22.5823 17.1165 22.2552 17.1507L18.0012 17.6021C17.6741 17.6364 17.4384 17.9293 17.4727 18.2564L17.9012 22.2989Z" fill="white"/>
        <path d="M24.4242 24.3516L24.4742 24.4102L24.7671 25.3487L25.0628 27.3414L25.8113 28.9756C25.8856 29.0542 25.9398 29.1542 25.9656 29.267C26.0384 29.5984 25.8284 29.927 25.4956 29.9998C25.1642 30.0727 24.8356 29.8627 24.7628 29.5298C24.7428 29.4384 24.7442 29.347 24.7628 29.2599L24.6128 27.4571L23.8486 25.4959L23.6543 24.6059L23.66 24.5174L24.4228 24.3502L24.4242 24.3516Z" fill="white"/>
        <path d="M18.0653 27.7257L17.6254 25.7587L17.5625 24.7774L17.5882 24.7045L18.3596 24.5859L18.3967 24.6659L18.5339 25.5659L18.5253 27.67L19.0324 29.407C19.0824 29.4799 19.1167 29.5656 19.131 29.6584C19.1824 29.9941 18.951 30.3084 18.6153 30.3598C18.2796 30.4112 17.9653 30.1798 17.9139 29.8441C17.8968 29.7298 17.9125 29.617 17.9525 29.517L18.0639 27.7228L18.0653 27.7257Z" fill="white"/>
        <path d="M36.503 27.7228V24.6559H34.916V22.3546L31.3105 26.1886L34.916 30.0226V27.7214H36.503V27.7228Z" fill="white"/>
        <path d="M54.8247 18.574C55.0487 18.1353 55.366 17.7947 55.7767 17.552C56.1967 17.3093 56.7053 17.188 57.3027 17.188V18.504H56.9667C55.5387 18.504 54.8247 19.2787 54.8247 20.828V25H53.5507V17.328H54.8247V18.574ZM59.4313 16.082C59.1886 16.082 58.9833 15.998 58.8153 15.83C58.6473 15.662 58.5633 15.4567 58.5633 15.214C58.5633 14.9713 58.6473 14.766 58.8153 14.598C58.9833 14.43 59.1886 14.346 59.4313 14.346C59.6646 14.346 59.8606 14.43 60.0193 14.598C60.1873 14.766 60.2713 14.9713 60.2713 15.214C60.2713 15.4567 60.1873 15.662 60.0193 15.83C59.8606 15.998 59.6646 16.082 59.4313 16.082ZM60.0473 17.328V25H58.7733V17.328H60.0473ZM65.3826 17.202C66.0453 17.202 66.624 17.3467 67.1186 17.636C67.6226 17.9253 67.996 18.2893 68.2386 18.728V17.328H69.5266V25.168C69.5266 25.868 69.3773 26.4887 69.0786 27.03C68.78 27.5807 68.3506 28.01 67.7906 28.318C67.24 28.626 66.596 28.78 65.8586 28.78C64.8506 28.78 64.0106 28.542 63.3386 28.066C62.6666 27.59 62.27 26.9413 62.1486 26.12H63.4086C63.5486 26.5867 63.838 26.96 64.2766 27.24C64.7153 27.5293 65.2426 27.674 65.8586 27.674C66.5586 27.674 67.128 27.4547 67.5666 27.016C68.0146 26.5773 68.2386 25.9613 68.2386 25.168V23.558C67.9866 24.006 67.6133 24.3793 67.1186 24.678C66.624 24.9767 66.0453 25.126 65.3826 25.126C64.7013 25.126 64.0806 24.958 63.5206 24.622C62.97 24.286 62.536 23.8147 62.2186 23.208C61.9013 22.6013 61.7426 21.9107 61.7426 21.136C61.7426 20.352 61.9013 19.666 62.2186 19.078C62.536 18.4807 62.97 18.0187 63.5206 17.692C64.0806 17.3653 64.7013 17.202 65.3826 17.202ZM68.2386 21.15C68.2386 20.5713 68.122 20.0673 67.8886 19.638C67.6553 19.2087 67.338 18.882 66.9366 18.658C66.5446 18.4247 66.1106 18.308 65.6346 18.308C65.1586 18.308 64.7246 18.42 64.3326 18.644C63.9406 18.868 63.628 19.1947 63.3946 19.624C63.1613 20.0533 63.0446 20.5573 63.0446 21.136C63.0446 21.724 63.1613 22.2373 63.3946 22.676C63.628 23.1053 63.9406 23.4367 64.3326 23.67C64.7246 23.894 65.1586 24.006 65.6346 24.006C66.1106 24.006 66.5446 23.894 66.9366 23.67C67.338 23.4367 67.6553 23.1053 67.8886 22.676C68.122 22.2373 68.2386 21.7287 68.2386 21.15ZM75.4876 17.188C76.0662 17.188 76.5889 17.314 77.0556 17.566C77.5222 17.8087 77.8862 18.1773 78.1476 18.672C78.4182 19.1667 78.5536 19.7687 78.5536 20.478V25H77.2936V20.66C77.2936 19.8947 77.1022 19.3113 76.7196 18.91C76.3369 18.4993 75.8142 18.294 75.1516 18.294C74.4796 18.294 73.9429 18.504 73.5416 18.924C73.1496 19.344 72.9536 19.9553 72.9536 20.758V25H71.6796V14.64H72.9536V18.42C73.2056 18.028 73.5509 17.7247 73.9896 17.51C74.4376 17.2953 74.9369 17.188 75.4876 17.188ZM82.1886 18.378V22.9C82.1886 23.2733 82.268 23.5393 82.4266 23.698C82.5853 23.8473 82.8606 23.922 83.2526 23.922H84.1906V25H83.0426C82.3333 25 81.8013 24.8367 81.4466 24.51C81.092 24.1833 80.9146 23.6467 80.9146 22.9V18.378H79.9206V17.328H80.9146V15.396H82.1886V17.328H84.1906V18.378H82.1886Z" fill="#28BDEB"/>
      </g>
    </svg>
  )
}

export default TiltSide