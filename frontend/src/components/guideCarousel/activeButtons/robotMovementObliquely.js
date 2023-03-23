import { useTheme } from '@mui/material/styles'

const RobotMovementObliquely = () => {
  const theme = useTheme()
  const activeButtonColor = theme.palette.text.guideActiveButton

  return (
    <svg width="534" height="41" viewBox="0 0 534 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g data-action="left-forward">
        <rect y="0.5" x="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB" fill="#28BDEB"/>
        <path d="M12.2194 9.63747V16.7615H11.0364V15.7085C10.8111 16.0725 10.4947 16.3585 10.0874 16.5665C9.68872 16.7658 9.24672 16.8655 8.76139 16.8655C8.20672 16.8655 7.70839 16.7528 7.26639 16.5275C6.82439 16.2935 6.47339 15.9468 6.21339 15.4875C5.96206 15.0281 5.83639 14.4691 5.83639 13.8105V9.63747H7.00639V13.6545C7.00639 14.3565 7.18406 14.8981 7.53939 15.2795C7.89472 15.6521 8.38006 15.8385 8.99539 15.8385C9.62806 15.8385 10.1264 15.6435 10.4904 15.2535C10.8544 14.8635 11.0364 14.2958 11.0364 13.5505V9.63747H12.2194Z" fill="white"/>
        <path d="M21.5632 22.7178C26.1063 22.9544 29.7598 26.7252 29.7598 31.3258V34.5318L28.6127 31.8615C27.2561 29.1487 24.5644 27.4141 21.5632 27.2546V30.924L14.2847 24.9743L21.5632 19.0461V22.7178Z" fill="white"/>
        <path d="M54.8247 6.64V17H53.5507V6.64H54.8247ZM63.996 12.87C63.996 13.1127 63.982 13.3693 63.954 13.64H57.822C57.8686 14.396 58.1253 14.9887 58.592 15.418C59.068 15.838 59.642 16.048 60.314 16.048C60.8646 16.048 61.322 15.922 61.686 15.67C62.0593 15.4087 62.3206 15.0633 62.47 14.634H63.842C63.6366 15.3713 63.226 15.9733 62.61 16.44C61.994 16.8973 61.2286 17.126 60.314 17.126C59.586 17.126 58.9326 16.9627 58.354 16.636C57.7846 16.3093 57.3366 15.8473 57.01 15.25C56.6833 14.6433 56.52 13.9433 56.52 13.15C56.52 12.3567 56.6786 11.6613 56.996 11.064C57.3133 10.4667 57.7566 10.0093 58.326 9.692C58.9046 9.36533 59.5673 9.202 60.314 9.202C61.042 9.202 61.686 9.36067 62.246 9.678C62.806 9.99533 63.2353 10.434 63.534 10.994C63.842 11.5447 63.996 12.17 63.996 12.87ZM62.68 12.604C62.68 12.1187 62.5726 11.7033 62.358 11.358C62.1433 11.0033 61.8493 10.7373 61.476 10.56C61.112 10.3733 60.706 10.28 60.258 10.28C59.614 10.28 59.0633 10.4853 58.606 10.896C58.158 11.3067 57.9013 11.876 57.836 12.604H62.68ZM68.7996 10.378H67.1896V17H65.9156V10.378H64.9216V9.328H65.9156V8.782C65.9156 7.92333 66.1349 7.298 66.5736 6.906C67.0216 6.50467 67.7356 6.304 68.7156 6.304V7.368C68.1556 7.368 67.7589 7.48 67.5256 7.704C67.3016 7.91867 67.1896 8.278 67.1896 8.782V9.328H68.7996V10.378ZM71.839 10.378V14.9C71.839 15.2733 71.9184 15.5393 72.077 15.698C72.2357 15.8473 72.511 15.922 72.903 15.922H73.841V17H72.693C71.9837 17 71.4517 16.8367 71.097 16.51C70.7424 16.1833 70.565 15.6467 70.565 14.9V10.378H69.571V9.328H70.565V7.396H71.839V9.328H73.841V10.378H71.839ZM86.6071 17L85.3331 15.712C84.8571 16.2067 84.3484 16.5753 83.8071 16.818C83.2657 17.0513 82.6544 17.168 81.9731 17.168C81.3011 17.168 80.7037 17.0467 80.1811 16.804C79.6677 16.5613 79.2664 16.216 78.9771 15.768C78.6971 15.32 78.5571 14.7973 78.5571 14.2C78.5571 13.5187 78.7484 12.9213 79.1311 12.408C79.5231 11.8853 80.0971 11.4747 80.8531 11.176C80.5544 10.8213 80.3397 10.4947 80.2091 10.196C80.0784 9.89733 80.0131 9.57067 80.0131 9.216C80.0131 8.80533 80.1157 8.43667 80.3211 8.11C80.5357 7.774 80.8391 7.51267 81.2311 7.326C81.6231 7.13933 82.0757 7.046 82.5891 7.046C83.0931 7.046 83.5317 7.144 83.9051 7.34C84.2784 7.536 84.5584 7.81133 84.7451 8.166C84.9317 8.51133 85.0157 8.89867 84.9971 9.328H83.7231C83.7324 8.94533 83.6251 8.64667 83.4011 8.432C83.1771 8.208 82.8877 8.096 82.5331 8.096C82.1597 8.096 81.8564 8.20333 81.6231 8.418C81.3991 8.62333 81.2871 8.88933 81.2871 9.216C81.2871 9.496 81.3617 9.76667 81.5111 10.028C81.6697 10.2893 81.9311 10.6113 82.2951 10.994L85.2071 13.92L85.4591 13.528L86.4111 11.932H87.7831L86.6351 13.92C86.4764 14.2 86.2897 14.494 86.0751 14.802L88.2731 17H86.6071ZM81.9731 16.076C82.4771 16.076 82.9297 15.978 83.3311 15.782C83.7417 15.586 84.1291 15.2827 84.4931 14.872L81.6231 11.988C80.4284 12.4453 79.8311 13.1687 79.8311 14.158C79.8311 14.7087 80.0271 15.166 80.4191 15.53C80.8204 15.894 81.3384 16.076 81.9731 16.076ZM56.6727 26.378H55.0627V33H53.7887V26.378H52.7947V25.328H53.7887V24.782C53.7887 23.9233 54.008 23.298 54.4467 22.906C54.8947 22.5047 55.6087 22.304 56.5887 22.304V23.368C56.0287 23.368 55.632 23.48 55.3987 23.704C55.1747 23.9187 55.0627 24.278 55.0627 24.782V25.328H56.6727V26.378ZM61.5041 33.126C60.7854 33.126 60.1321 32.9627 59.5441 32.636C58.9654 32.3093 58.5081 31.8473 58.1721 31.25C57.8454 30.6433 57.6821 29.9433 57.6821 29.15C57.6821 28.366 57.8501 27.6753 58.1861 27.078C58.5314 26.4713 58.9981 26.0093 59.5861 25.692C60.1741 25.3653 60.8321 25.202 61.5601 25.202C62.2881 25.202 62.9461 25.3653 63.5341 25.692C64.1221 26.0093 64.5841 26.4667 64.9201 27.064C65.2654 27.6613 65.4381 28.3567 65.4381 29.15C65.4381 29.9433 65.2607 30.6433 64.9061 31.25C64.5607 31.8473 64.0894 32.3093 63.4921 32.636C62.8947 32.9627 62.2321 33.126 61.5041 33.126ZM61.5041 32.006C61.9614 32.006 62.3907 31.8987 62.7921 31.684C63.1934 31.4693 63.5154 31.1473 63.7581 30.718C64.0101 30.2887 64.1361 29.766 64.1361 29.15C64.1361 28.534 64.0147 28.0113 63.7721 27.582C63.5294 27.1527 63.2121 26.8353 62.8201 26.63C62.4281 26.4153 62.0034 26.308 61.5461 26.308C61.0794 26.308 60.6501 26.4153 60.2581 26.63C59.8754 26.8353 59.5674 27.1527 59.3341 27.582C59.1007 28.0113 58.9841 28.534 58.9841 29.15C58.9841 29.7753 59.0961 30.3027 59.3201 30.732C59.5534 31.1613 59.8614 31.4833 60.2441 31.698C60.6267 31.9033 61.0467 32.006 61.5041 32.006ZM68.3872 26.574C68.6112 26.1353 68.9285 25.7947 69.3392 25.552C69.7592 25.3093 70.2678 25.188 70.8652 25.188V26.504H70.5292C69.1012 26.504 68.3872 27.2787 68.3872 28.828V33H67.1132V25.328H68.3872V26.574ZM82.5558 25.328L80.1618 33H78.8458L76.9978 26.91L75.1498 33H73.8338L71.4258 25.328H72.7278L74.4918 31.768L76.3958 25.328H77.6978L79.5598 31.782L81.2958 25.328H82.5558ZM83.3442 29.136C83.3442 28.352 83.5029 27.666 83.8202 27.078C84.1375 26.4807 84.5715 26.0187 85.1222 25.692C85.6822 25.3653 86.3029 25.202 86.9842 25.202C87.6562 25.202 88.2395 25.3467 88.7342 25.636C89.2289 25.9253 89.5975 26.2893 89.8402 26.728V25.328H91.1282V33H89.8402V31.572C89.5882 32.02 89.2102 32.3933 88.7062 32.692C88.2115 32.9813 87.6329 33.126 86.9702 33.126C86.2889 33.126 85.6729 32.958 85.1222 32.622C84.5715 32.286 84.1375 31.8147 83.8202 31.208C83.5029 30.6013 83.3442 29.9107 83.3442 29.136ZM89.8402 29.15C89.8402 28.5713 89.7235 28.0673 89.4902 27.638C89.2569 27.2087 88.9395 26.882 88.5382 26.658C88.1462 26.4247 87.7122 26.308 87.2362 26.308C86.7602 26.308 86.3262 26.42 85.9342 26.644C85.5422 26.868 85.2295 27.1947 84.9962 27.624C84.7629 28.0533 84.6462 28.5573 84.6462 29.136C84.6462 29.724 84.7629 30.2373 84.9962 30.676C85.2295 31.1053 85.5422 31.4367 85.9342 31.67C86.3262 31.894 86.7602 32.006 87.2362 32.006C87.7122 32.006 88.1462 31.894 88.5382 31.67C88.9395 31.4367 89.2569 31.1053 89.4902 30.676C89.7235 30.2373 89.8402 29.7287 89.8402 29.15ZM94.5551 26.574C94.7791 26.1353 95.0965 25.7947 95.5071 25.552C95.9271 25.3093 96.4358 25.188 97.0331 25.188V26.504H96.6971C95.2691 26.504 94.5551 27.2787 94.5551 28.828V33H93.2811V25.328H94.5551V26.574ZM98.0278 29.136C98.0278 28.352 98.1864 27.666 98.5038 27.078C98.8211 26.4807 99.2551 26.0187 99.8058 25.692C100.366 25.3653 100.991 25.202 101.682 25.202C102.279 25.202 102.834 25.342 103.348 25.622C103.861 25.8927 104.253 26.252 104.524 26.7V22.64H105.812V33H104.524V31.558C104.272 32.0153 103.898 32.3933 103.404 32.692C102.909 32.9813 102.33 33.126 101.668 33.126C100.986 33.126 100.366 32.958 99.8058 32.622C99.2551 32.286 98.8211 31.8147 98.5038 31.208C98.1864 30.6013 98.0278 29.9107 98.0278 29.136ZM104.524 29.15C104.524 28.5713 104.407 28.0673 104.174 27.638C103.94 27.2087 103.623 26.882 103.222 26.658C102.83 26.4247 102.396 26.308 101.92 26.308C101.444 26.308 101.01 26.42 100.618 26.644C100.226 26.868 99.9131 27.1947 99.6798 27.624C99.4464 28.0533 99.3298 28.5573 99.3298 29.136C99.3298 29.724 99.4464 30.2373 99.6798 30.676C99.9131 31.1053 100.226 31.4367 100.618 31.67C101.01 31.894 101.444 32.006 101.92 32.006C102.396 32.006 102.83 31.894 103.222 31.67C103.623 31.4367 103.94 31.1053 104.174 30.676C104.407 30.2373 104.524 29.7287 104.524 29.15Z" fill="#28BDEB"/>
      </g>
      <g data-action="left-backward">
        <rect x="263.447" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M279.021 9.5076C279.576 9.5076 280.07 9.6246 280.503 9.8586C280.936 10.0839 281.279 10.4263 281.53 10.8856C281.781 11.3449 281.907 11.9039 281.907 12.5626V16.7616H280.737V12.7316C280.737 12.0209 280.559 11.4793 280.204 11.1066C279.857 10.7253 279.385 10.5346 278.787 10.5346C278.172 10.5346 277.682 10.7339 277.318 11.1326C276.954 11.5226 276.772 12.0903 276.772 12.8356V16.7616H275.602V12.7316C275.602 12.0209 275.424 11.4793 275.069 11.1066C274.722 10.7253 274.25 10.5346 273.652 10.5346C273.037 10.5346 272.547 10.7339 272.183 11.1326C271.819 11.5226 271.637 12.0903 271.637 12.8356V16.7616H270.454V9.6376H271.637V10.6646C271.871 10.2919 272.183 10.0059 272.573 9.8066C272.972 9.60726 273.409 9.5076 273.886 9.5076C274.484 9.5076 275.013 9.64193 275.472 9.9106C275.931 10.1793 276.274 10.5736 276.499 11.0936C276.698 10.5909 277.028 10.2009 277.487 9.9236C277.946 9.64626 278.458 9.5076 279.021 9.5076Z" fill="#28BDEB"/>
        <path d="M280.898 27.2482C281.135 22.7051 284.906 19.0516 289.506 19.0516L292.712 19.0516L290.042 20.1987C287.329 21.5553 285.595 24.247 285.435 27.2482L289.104 27.2482L283.155 34.5267L277.227 27.2482L280.898 27.2482Z" fill="#28BDEB"/>
        <path d="M317.774 6.64V17H316.5V6.64H317.774ZM326.945 12.87C326.945 13.1127 326.931 13.3693 326.903 13.64H320.771C320.818 14.396 321.075 14.9887 321.541 15.418C322.017 15.838 322.591 16.048 323.263 16.048C323.814 16.048 324.271 15.922 324.635 15.67C325.009 15.4087 325.27 15.0633 325.419 14.634H326.791C326.586 15.3713 326.175 15.9733 325.559 16.44C324.943 16.8973 324.178 17.126 323.263 17.126C322.535 17.126 321.882 16.9627 321.303 16.636C320.734 16.3093 320.286 15.8473 319.959 15.25C319.633 14.6433 319.469 13.9433 319.469 13.15C319.469 12.3567 319.628 11.6613 319.945 11.064C320.263 10.4667 320.706 10.0093 321.275 9.692C321.854 9.36533 322.517 9.202 323.263 9.202C323.991 9.202 324.635 9.36067 325.195 9.678C325.755 9.99533 326.185 10.434 326.483 10.994C326.791 11.5447 326.945 12.17 326.945 12.87ZM325.629 12.604C325.629 12.1187 325.522 11.7033 325.307 11.358C325.093 11.0033 324.799 10.7373 324.425 10.56C324.061 10.3733 323.655 10.28 323.207 10.28C322.563 10.28 322.013 10.4853 321.555 10.896C321.107 11.3067 320.851 11.876 320.785 12.604H325.629ZM331.749 10.378H330.139V17H328.865V10.378H327.871V9.328H328.865V8.782C328.865 7.92333 329.084 7.298 329.523 6.906C329.971 6.50467 330.685 6.304 331.665 6.304V7.368C331.105 7.368 330.708 7.48 330.475 7.704C330.251 7.91867 330.139 8.278 330.139 8.782V9.328H331.749V10.378ZM334.788 10.378V14.9C334.788 15.2733 334.868 15.5393 335.026 15.698C335.185 15.8473 335.46 15.922 335.852 15.922H336.79V17H335.642C334.933 17 334.401 16.8367 334.046 16.51C333.692 16.1833 333.514 15.6467 333.514 14.9V10.378H332.52V9.328H333.514V7.396H334.788V9.328H336.79V10.378H334.788ZM349.556 17L348.282 15.712C347.806 16.2067 347.298 16.5753 346.756 16.818C346.215 17.0513 345.604 17.168 344.922 17.168C344.25 17.168 343.653 17.0467 343.13 16.804C342.617 16.5613 342.216 16.216 341.926 15.768C341.646 15.32 341.506 14.7973 341.506 14.2C341.506 13.5187 341.698 12.9213 342.08 12.408C342.472 11.8853 343.046 11.4747 343.802 11.176C343.504 10.8213 343.289 10.4947 343.158 10.196C343.028 9.89733 342.962 9.57067 342.962 9.216C342.962 8.80533 343.065 8.43667 343.27 8.11C343.485 7.774 343.788 7.51267 344.18 7.326C344.572 7.13933 345.025 7.046 345.538 7.046C346.042 7.046 346.481 7.144 346.854 7.34C347.228 7.536 347.508 7.81133 347.694 8.166C347.881 8.51133 347.965 8.89867 347.946 9.328H346.672C346.682 8.94533 346.574 8.64667 346.35 8.432C346.126 8.208 345.837 8.096 345.482 8.096C345.109 8.096 344.806 8.20333 344.572 8.418C344.348 8.62333 344.236 8.88933 344.236 9.216C344.236 9.496 344.311 9.76667 344.46 10.028C344.619 10.2893 344.88 10.6113 345.244 10.994L348.156 13.92L348.408 13.528L349.36 11.932H350.732L349.584 13.92C349.426 14.2 349.239 14.494 349.024 14.802L351.222 17H349.556ZM344.922 16.076C345.426 16.076 345.879 15.978 346.28 15.782C346.691 15.586 347.078 15.2827 347.442 14.872L344.572 11.988C343.378 12.4453 342.78 13.1687 342.78 14.158C342.78 14.7087 342.976 15.166 343.368 15.53C343.77 15.894 344.288 16.076 344.922 16.076ZM317.774 26.756C318.035 26.2987 318.418 25.9253 318.922 25.636C319.426 25.3467 320 25.202 320.644 25.202C321.335 25.202 321.955 25.3653 322.506 25.692C323.057 26.0187 323.491 26.4807 323.808 27.078C324.125 27.666 324.284 28.352 324.284 29.136C324.284 29.9107 324.125 30.6013 323.808 31.208C323.491 31.8147 323.052 32.286 322.492 32.622C321.941 32.958 321.325 33.126 320.644 33.126C319.981 33.126 319.398 32.9813 318.894 32.692C318.399 32.4027 318.026 32.034 317.774 31.586V33H316.5V22.64H317.774V26.756ZM322.982 29.136C322.982 28.5573 322.865 28.0533 322.632 27.624C322.399 27.1947 322.081 26.868 321.68 26.644C321.288 26.42 320.854 26.308 320.378 26.308C319.911 26.308 319.477 26.4247 319.076 26.658C318.684 26.882 318.367 27.2133 318.124 27.652C317.891 28.0813 317.774 28.5807 317.774 29.15C317.774 29.7287 317.891 30.2373 318.124 30.676C318.367 31.1053 318.684 31.4367 319.076 31.67C319.477 31.894 319.911 32.006 320.378 32.006C320.854 32.006 321.288 31.894 321.68 31.67C322.081 31.4367 322.399 31.1053 322.632 30.676C322.865 30.2373 322.982 29.724 322.982 29.136ZM325.485 29.136C325.485 28.352 325.643 27.666 325.961 27.078C326.278 26.4807 326.712 26.0187 327.263 25.692C327.823 25.3653 328.443 25.202 329.125 25.202C329.797 25.202 330.38 25.3467 330.875 25.636C331.369 25.9253 331.738 26.2893 331.981 26.728V25.328H333.269V33H331.981V31.572C331.729 32.02 331.351 32.3933 330.847 32.692C330.352 32.9813 329.773 33.126 329.111 33.126C328.429 33.126 327.813 32.958 327.263 32.622C326.712 32.286 326.278 31.8147 325.961 31.208C325.643 30.6013 325.485 29.9107 325.485 29.136ZM331.981 29.15C331.981 28.5713 331.864 28.0673 331.631 27.638C331.397 27.2087 331.08 26.882 330.679 26.658C330.287 26.4247 329.853 26.308 329.377 26.308C328.901 26.308 328.467 26.42 328.075 26.644C327.683 26.868 327.37 27.1947 327.137 27.624C326.903 28.0533 326.787 28.5573 326.787 29.136C326.787 29.724 326.903 30.2373 327.137 30.676C327.37 31.1053 327.683 31.4367 328.075 31.67C328.467 31.894 328.901 32.006 329.377 32.006C329.853 32.006 330.287 31.894 330.679 31.67C331.08 31.4367 331.397 31.1053 331.631 30.676C331.864 30.2373 331.981 29.7287 331.981 29.15ZM334.946 29.15C334.946 28.3567 335.104 27.666 335.422 27.078C335.739 26.4807 336.178 26.0187 336.738 25.692C337.307 25.3653 337.956 25.202 338.684 25.202C339.626 25.202 340.401 25.4307 341.008 25.888C341.624 26.3453 342.03 26.98 342.226 27.792H340.854C340.723 27.3253 340.466 26.9567 340.084 26.686C339.71 26.4153 339.244 26.28 338.684 26.28C337.956 26.28 337.368 26.532 336.92 27.036C336.472 27.5307 336.248 28.2353 336.248 29.15C336.248 30.074 336.472 30.788 336.92 31.292C337.368 31.796 337.956 32.048 338.684 32.048C339.244 32.048 339.71 31.9173 340.084 31.656C340.457 31.3947 340.714 31.0213 340.854 30.536H342.226C342.02 31.32 341.61 31.95 340.994 32.426C340.378 32.8927 339.608 33.126 338.684 33.126C337.956 33.126 337.307 32.9627 336.738 32.636C336.178 32.3093 335.739 31.8473 335.422 31.25C335.104 30.6527 334.946 29.9527 334.946 29.15ZM348.21 33L345.2 29.612V33H343.926V22.64H345.2V28.73L348.154 25.328H349.932L346.32 29.15L349.946 33H348.21ZM361.351 25.328L358.957 33H357.641L355.793 26.91L353.945 33H352.629L350.221 25.328H351.523L353.287 31.768L355.191 25.328H356.493L358.355 31.782L360.091 25.328H361.351ZM362.139 29.136C362.139 28.352 362.298 27.666 362.615 27.078C362.932 26.4807 363.366 26.0187 363.917 25.692C364.477 25.3653 365.098 25.202 365.779 25.202C366.451 25.202 367.034 25.3467 367.529 25.636C368.024 25.9253 368.392 26.2893 368.635 26.728V25.328H369.923V33H368.635V31.572C368.383 32.02 368.005 32.3933 367.501 32.692C367.006 32.9813 366.428 33.126 365.765 33.126C365.084 33.126 364.468 32.958 363.917 32.622C363.366 32.286 362.932 31.8147 362.615 31.208C362.298 30.6013 362.139 29.9107 362.139 29.136ZM368.635 29.15C368.635 28.5713 368.518 28.0673 368.285 27.638C368.052 27.2087 367.734 26.882 367.333 26.658C366.941 26.4247 366.507 26.308 366.031 26.308C365.555 26.308 365.121 26.42 364.729 26.644C364.337 26.868 364.024 27.1947 363.791 27.624C363.558 28.0533 363.441 28.5573 363.441 29.136C363.441 29.724 363.558 30.2373 363.791 30.676C364.024 31.1053 364.337 31.4367 364.729 31.67C365.121 31.894 365.555 32.006 366.031 32.006C366.507 32.006 366.941 31.894 367.333 31.67C367.734 31.4367 368.052 31.1053 368.285 30.676C368.518 30.2373 368.635 29.7287 368.635 29.15ZM373.35 26.574C373.574 26.1353 373.891 25.7947 374.302 25.552C374.722 25.3093 375.231 25.188 375.828 25.188V26.504H375.492C374.064 26.504 373.35 27.2787 373.35 28.828V33H372.076V25.328H373.35V26.574ZM376.823 29.136C376.823 28.352 376.981 27.666 377.299 27.078C377.616 26.4807 378.05 26.0187 378.601 25.692C379.161 25.3653 379.786 25.202 380.477 25.202C381.074 25.202 381.629 25.342 382.143 25.622C382.656 25.8927 383.048 26.252 383.319 26.7V22.64H384.607V33H383.319V31.558C383.067 32.0153 382.693 32.3933 382.199 32.692C381.704 32.9813 381.125 33.126 380.463 33.126C379.781 33.126 379.161 32.958 378.601 32.622C378.05 32.286 377.616 31.8147 377.299 31.208C376.981 30.6013 376.823 29.9107 376.823 29.136ZM383.319 29.15C383.319 28.5713 383.202 28.0673 382.969 27.638C382.735 27.2087 382.418 26.882 382.017 26.658C381.625 26.4247 381.191 26.308 380.715 26.308C380.239 26.308 379.805 26.42 379.413 26.644C379.021 26.868 378.708 27.1947 378.475 27.624C378.241 28.0533 378.125 28.5573 378.125 29.136C378.125 29.724 378.241 30.2373 378.475 30.676C378.708 31.1053 379.021 31.4367 379.413 31.67C379.805 31.894 380.239 32.006 380.715 32.006C381.191 32.006 381.625 31.894 382.017 31.67C382.418 31.4367 382.735 31.1053 382.969 30.676C383.202 30.2373 383.319 29.7287 383.319 29.15Z" fill={activeButtonColor}/>
      </g>
      <g data-action="right-forward">
        <rect x="131.973" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M140.116 16.8785C139.448 16.8785 138.842 16.7268 138.296 16.4235C137.758 16.1201 137.334 15.6911 137.022 15.1365C136.718 14.5731 136.567 13.9231 136.567 13.1865C136.567 12.4585 136.723 11.8171 137.035 11.2625C137.355 10.6991 137.789 10.2701 138.335 9.97547C138.881 9.67214 139.492 9.52047 140.168 9.52047C140.844 9.52047 141.455 9.67214 142.001 9.97547C142.547 10.2701 142.976 10.6948 143.288 11.2495C143.608 11.8041 143.769 12.4498 143.769 13.1865C143.769 13.9231 143.604 14.5731 143.275 15.1365C142.954 15.6911 142.516 16.1201 141.962 16.4235C141.407 16.7268 140.792 16.8785 140.116 16.8785ZM140.116 15.8385C140.54 15.8385 140.939 15.7388 141.312 15.5395C141.684 15.3401 141.983 15.0411 142.209 14.6425C142.443 14.2438 142.56 13.7585 142.56 13.1865C142.56 12.6145 142.447 12.1291 142.222 11.7305C141.996 11.3318 141.702 11.0371 141.338 10.8465C140.974 10.6471 140.579 10.5475 140.155 10.5475C139.721 10.5475 139.323 10.6471 138.959 10.8465C138.603 11.0371 138.317 11.3318 138.101 11.7305C137.884 12.1291 137.776 12.6145 137.776 13.1865C137.776 13.7671 137.88 14.2568 138.088 14.6555C138.304 15.0541 138.59 15.3531 138.946 15.5525C139.301 15.7431 139.691 15.8385 140.116 15.8385Z" fill="#28BDEB"/>
        <path d="M155.144 22.7178C150.601 22.9544 146.947 26.7252 146.947 31.3258V34.5318L148.094 31.8615C149.451 29.1487 152.143 27.4141 155.144 27.2546V30.924L162.422 24.9743L155.144 19.0461V22.7178Z" fill="#28BDEB"/>
        <path d="M186.297 10.574C186.521 10.1353 186.839 9.79467 187.249 9.552C187.669 9.30933 188.178 9.188 188.775 9.188V10.504H188.439C187.011 10.504 186.297 11.2787 186.297 12.828V17H185.023V9.328H186.297V10.574ZM190.904 8.082C190.661 8.082 190.456 7.998 190.288 7.83C190.12 7.662 190.036 7.45667 190.036 7.214C190.036 6.97133 190.12 6.766 190.288 6.598C190.456 6.43 190.661 6.346 190.904 6.346C191.137 6.346 191.333 6.43 191.492 6.598C191.66 6.766 191.744 6.97133 191.744 7.214C191.744 7.45667 191.66 7.662 191.492 7.83C191.333 7.998 191.137 8.082 190.904 8.082ZM191.52 9.328V17H190.246V9.328H191.52ZM196.855 9.202C197.518 9.202 198.097 9.34667 198.591 9.636C199.095 9.92533 199.469 10.2893 199.711 10.728V9.328H200.999V17.168C200.999 17.868 200.85 18.4887 200.551 19.03C200.253 19.5807 199.823 20.01 199.263 20.318C198.713 20.626 198.069 20.78 197.331 20.78C196.323 20.78 195.483 20.542 194.811 20.066C194.139 19.59 193.743 18.9413 193.621 18.12H194.881C195.021 18.5867 195.311 18.96 195.749 19.24C196.188 19.5293 196.715 19.674 197.331 19.674C198.031 19.674 198.601 19.4547 199.039 19.016C199.487 18.5773 199.711 17.9613 199.711 17.168V15.558C199.459 16.006 199.086 16.3793 198.591 16.678C198.097 16.9767 197.518 17.126 196.855 17.126C196.174 17.126 195.553 16.958 194.993 16.622C194.443 16.286 194.009 15.8147 193.691 15.208C193.374 14.6013 193.215 13.9107 193.215 13.136C193.215 12.352 193.374 11.666 193.691 11.078C194.009 10.4807 194.443 10.0187 194.993 9.692C195.553 9.36533 196.174 9.202 196.855 9.202ZM199.711 13.15C199.711 12.5713 199.595 12.0673 199.361 11.638C199.128 11.2087 198.811 10.882 198.409 10.658C198.017 10.4247 197.583 10.308 197.107 10.308C196.631 10.308 196.197 10.42 195.805 10.644C195.413 10.868 195.101 11.1947 194.867 11.624C194.634 12.0533 194.517 12.5573 194.517 13.136C194.517 13.724 194.634 14.2373 194.867 14.676C195.101 15.1053 195.413 15.4367 195.805 15.67C196.197 15.894 196.631 16.006 197.107 16.006C197.583 16.006 198.017 15.894 198.409 15.67C198.811 15.4367 199.128 15.1053 199.361 14.676C199.595 14.2373 199.711 13.7287 199.711 13.15ZM206.96 9.188C207.539 9.188 208.062 9.314 208.528 9.566C208.995 9.80867 209.359 10.1773 209.62 10.672C209.891 11.1667 210.026 11.7687 210.026 12.478V17H208.766V12.66C208.766 11.8947 208.575 11.3113 208.192 10.91C207.81 10.4993 207.287 10.294 206.624 10.294C205.952 10.294 205.416 10.504 205.014 10.924C204.622 11.344 204.426 11.9553 204.426 12.758V17H203.152V6.64H204.426V10.42C204.678 10.028 205.024 9.72467 205.462 9.51C205.91 9.29533 206.41 9.188 206.96 9.188ZM213.661 10.378V14.9C213.661 15.2733 213.741 15.5393 213.899 15.698C214.058 15.8473 214.333 15.922 214.725 15.922H215.663V17H214.515C213.806 17 213.274 16.8367 212.919 16.51C212.565 16.1833 212.387 15.6467 212.387 14.9V10.378H211.393V9.328H212.387V7.396H213.661V9.328H215.663V10.378H213.661ZM228.429 17L227.155 15.712C226.679 16.2067 226.171 16.5753 225.629 16.818C225.088 17.0513 224.477 17.168 223.795 17.168C223.123 17.168 222.526 17.0467 222.003 16.804C221.49 16.5613 221.089 16.216 220.799 15.768C220.519 15.32 220.379 14.7973 220.379 14.2C220.379 13.5187 220.571 12.9213 220.953 12.408C221.345 11.8853 221.919 11.4747 222.675 11.176C222.377 10.8213 222.162 10.4947 222.031 10.196C221.901 9.89733 221.835 9.57067 221.835 9.216C221.835 8.80533 221.938 8.43667 222.143 8.11C222.358 7.774 222.661 7.51267 223.053 7.326C223.445 7.13933 223.898 7.046 224.411 7.046C224.915 7.046 225.354 7.144 225.727 7.34C226.101 7.536 226.381 7.81133 226.567 8.166C226.754 8.51133 226.838 8.89867 226.819 9.328H225.545C225.555 8.94533 225.447 8.64667 225.223 8.432C224.999 8.208 224.71 8.096 224.355 8.096C223.982 8.096 223.679 8.20333 223.445 8.418C223.221 8.62333 223.109 8.88933 223.109 9.216C223.109 9.496 223.184 9.76667 223.333 10.028C223.492 10.2893 223.753 10.6113 224.117 10.994L227.029 13.92L227.281 13.528L228.233 11.932H229.605L228.457 13.92C228.299 14.2 228.112 14.494 227.897 14.802L230.095 17H228.429ZM223.795 16.076C224.299 16.076 224.752 15.978 225.153 15.782C225.564 15.586 225.951 15.2827 226.315 14.872L223.445 11.988C222.251 12.4453 221.653 13.1687 221.653 14.158C221.653 14.7087 221.849 15.166 222.241 15.53C222.643 15.894 223.161 16.076 223.795 16.076ZM188.145 26.378H186.535V33H185.261V26.378H184.267V25.328H185.261V24.782C185.261 23.9233 185.481 23.298 185.919 22.906C186.367 22.5047 187.081 22.304 188.061 22.304V23.368C187.501 23.368 187.105 23.48 186.871 23.704C186.647 23.9187 186.535 24.278 186.535 24.782V25.328H188.145V26.378ZM192.977 33.126C192.258 33.126 191.605 32.9627 191.017 32.636C190.438 32.3093 189.981 31.8473 189.645 31.25C189.318 30.6433 189.155 29.9433 189.155 29.15C189.155 28.366 189.323 27.6753 189.659 27.078C190.004 26.4713 190.471 26.0093 191.059 25.692C191.647 25.3653 192.305 25.202 193.033 25.202C193.761 25.202 194.419 25.3653 195.007 25.692C195.595 26.0093 196.057 26.4667 196.393 27.064C196.738 27.6613 196.911 28.3567 196.911 29.15C196.911 29.9433 196.733 30.6433 196.379 31.25C196.033 31.8473 195.562 32.3093 194.965 32.636C194.367 32.9627 193.705 33.126 192.977 33.126ZM192.977 32.006C193.434 32.006 193.863 31.8987 194.265 31.684C194.666 31.4693 194.988 31.1473 195.231 30.718C195.483 30.2887 195.609 29.766 195.609 29.15C195.609 28.534 195.487 28.0113 195.245 27.582C195.002 27.1527 194.685 26.8353 194.293 26.63C193.901 26.4153 193.476 26.308 193.019 26.308C192.552 26.308 192.123 26.4153 191.731 26.63C191.348 26.8353 191.04 27.1527 190.807 27.582C190.573 28.0113 190.457 28.534 190.457 29.15C190.457 29.7753 190.569 30.3027 190.793 30.732C191.026 31.1613 191.334 31.4833 191.717 31.698C192.099 31.9033 192.519 32.006 192.977 32.006ZM199.86 26.574C200.084 26.1353 200.401 25.7947 200.812 25.552C201.232 25.3093 201.74 25.188 202.338 25.188V26.504H202.002C200.574 26.504 199.86 27.2787 199.86 28.828V33H198.586V25.328H199.86V26.574ZM214.028 25.328L211.634 33H210.318L208.47 26.91L206.622 33H205.306L202.898 25.328H204.2L205.964 31.768L207.868 25.328H209.17L211.032 31.782L212.768 25.328H214.028ZM214.817 29.136C214.817 28.352 214.976 27.666 215.293 27.078C215.61 26.4807 216.044 26.0187 216.595 25.692C217.155 25.3653 217.776 25.202 218.457 25.202C219.129 25.202 219.712 25.3467 220.207 25.636C220.702 25.9253 221.07 26.2893 221.313 26.728V25.328H222.601V33H221.313V31.572C221.061 32.02 220.683 32.3933 220.179 32.692C219.684 32.9813 219.106 33.126 218.443 33.126C217.762 33.126 217.146 32.958 216.595 32.622C216.044 32.286 215.61 31.8147 215.293 31.208C214.976 30.6013 214.817 29.9107 214.817 29.136ZM221.313 29.15C221.313 28.5713 221.196 28.0673 220.963 27.638C220.73 27.2087 220.412 26.882 220.011 26.658C219.619 26.4247 219.185 26.308 218.709 26.308C218.233 26.308 217.799 26.42 217.407 26.644C217.015 26.868 216.702 27.1947 216.469 27.624C216.236 28.0533 216.119 28.5573 216.119 29.136C216.119 29.724 216.236 30.2373 216.469 30.676C216.702 31.1053 217.015 31.4367 217.407 31.67C217.799 31.894 218.233 32.006 218.709 32.006C219.185 32.006 219.619 31.894 220.011 31.67C220.412 31.4367 220.73 31.1053 220.963 30.676C221.196 30.2373 221.313 29.7287 221.313 29.15ZM226.028 26.574C226.252 26.1353 226.569 25.7947 226.98 25.552C227.4 25.3093 227.908 25.188 228.506 25.188V26.504H228.17C226.742 26.504 226.028 27.2787 226.028 28.828V33H224.754V25.328H226.028V26.574ZM229.5 29.136C229.5 28.352 229.659 27.666 229.976 27.078C230.294 26.4807 230.728 26.0187 231.278 25.692C231.838 25.3653 232.464 25.202 233.154 25.202C233.752 25.202 234.307 25.342 234.82 25.622C235.334 25.8927 235.726 26.252 235.996 26.7V22.64H237.284V33H235.996V31.558C235.744 32.0153 235.371 32.3933 234.876 32.692C234.382 32.9813 233.803 33.126 233.14 33.126C232.459 33.126 231.838 32.958 231.278 32.622C230.728 32.286 230.294 31.8147 229.976 31.208C229.659 30.6013 229.5 29.9107 229.5 29.136ZM235.996 29.15C235.996 28.5713 235.88 28.0673 235.646 27.638C235.413 27.2087 235.096 26.882 234.694 26.658C234.302 26.4247 233.868 26.308 233.392 26.308C232.916 26.308 232.482 26.42 232.09 26.644C231.698 26.868 231.386 27.1947 231.152 27.624C230.919 28.0533 230.802 28.5573 230.802 29.136C230.802 29.724 230.919 30.2373 231.152 30.676C231.386 31.1053 231.698 31.4367 232.09 31.67C232.482 31.894 232.916 32.006 233.392 32.006C233.868 32.006 234.302 31.894 234.694 31.67C235.096 31.4367 235.413 31.1053 235.646 30.676C235.88 30.2373 235.996 29.7287 235.996 29.15Z" fill={activeButtonColor}/>
      </g>
      <g data-action="right-backward">
        <rect x="410.922" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M421.803 13.8316C421.597 13.8316 421.423 13.7616 421.283 13.6216C421.143 13.4816 421.073 13.3083 421.073 13.1016C421.073 12.8949 421.143 12.7216 421.283 12.5816C421.423 12.4416 421.597 12.3716 421.803 12.3716C422.003 12.3716 422.173 12.4416 422.313 12.5816C422.453 12.7216 422.523 12.8949 422.523 13.1016C422.523 13.3083 422.453 13.4816 422.313 13.6216C422.173 13.7616 422.003 13.8316 421.803 13.8316Z" fill="#28BDEB"/>
        <path d="M437.705 26.0471C437.469 21.5041 433.698 17.8506 429.097 17.8506L425.891 17.8506L428.562 18.9976C431.274 20.3543 433.009 23.0459 433.168 26.0471L429.499 26.0471L435.449 33.3256L441.377 26.0471L437.705 26.0471Z" fill="#28BDEB"/>
        <path d="M465.247 10.574C465.471 10.1353 465.788 9.79467 466.199 9.552C466.619 9.30933 467.127 9.188 467.725 9.188V10.504H467.389C465.961 10.504 465.247 11.2787 465.247 12.828V17H463.973V9.328H465.247V10.574ZM469.853 8.082C469.611 8.082 469.405 7.998 469.237 7.83C469.069 7.662 468.985 7.45667 468.985 7.214C468.985 6.97133 469.069 6.766 469.237 6.598C469.405 6.43 469.611 6.346 469.853 6.346C470.087 6.346 470.283 6.43 470.441 6.598C470.609 6.766 470.693 6.97133 470.693 7.214C470.693 7.45667 470.609 7.662 470.441 7.83C470.283 7.998 470.087 8.082 469.853 8.082ZM470.469 9.328V17H469.195V9.328H470.469ZM475.805 9.202C476.467 9.202 477.046 9.34667 477.541 9.636C478.045 9.92533 478.418 10.2893 478.661 10.728V9.328H479.949V17.168C479.949 17.868 479.799 18.4887 479.501 19.03C479.202 19.5807 478.773 20.01 478.213 20.318C477.662 20.626 477.018 20.78 476.281 20.78C475.273 20.78 474.433 20.542 473.761 20.066C473.089 19.59 472.692 18.9413 472.571 18.12H473.831C473.971 18.5867 474.26 18.96 474.699 19.24C475.137 19.5293 475.665 19.674 476.281 19.674C476.981 19.674 477.55 19.4547 477.989 19.016C478.437 18.5773 478.661 17.9613 478.661 17.168V15.558C478.409 16.006 478.035 16.3793 477.541 16.678C477.046 16.9767 476.467 17.126 475.805 17.126C475.123 17.126 474.503 16.958 473.943 16.622C473.392 16.286 472.958 15.8147 472.641 15.208C472.323 14.6013 472.165 13.9107 472.165 13.136C472.165 12.352 472.323 11.666 472.641 11.078C472.958 10.4807 473.392 10.0187 473.943 9.692C474.503 9.36533 475.123 9.202 475.805 9.202ZM478.661 13.15C478.661 12.5713 478.544 12.0673 478.311 11.638C478.077 11.2087 477.76 10.882 477.359 10.658C476.967 10.4247 476.533 10.308 476.057 10.308C475.581 10.308 475.147 10.42 474.755 10.644C474.363 10.868 474.05 11.1947 473.817 11.624C473.583 12.0533 473.467 12.5573 473.467 13.136C473.467 13.724 473.583 14.2373 473.817 14.676C474.05 15.1053 474.363 15.4367 474.755 15.67C475.147 15.894 475.581 16.006 476.057 16.006C476.533 16.006 476.967 15.894 477.359 15.67C477.76 15.4367 478.077 15.1053 478.311 14.676C478.544 14.2373 478.661 13.7287 478.661 13.15ZM485.909 9.188C486.488 9.188 487.011 9.314 487.477 9.566C487.944 9.80867 488.308 10.1773 488.569 10.672C488.84 11.1667 488.975 11.7687 488.975 12.478V17H487.715V12.66C487.715 11.8947 487.524 11.3113 487.141 10.91C486.759 10.4993 486.236 10.294 485.573 10.294C484.901 10.294 484.365 10.504 483.963 10.924C483.571 11.344 483.375 11.9553 483.375 12.758V17H482.101V6.64H483.375V10.42C483.627 10.028 483.973 9.72467 484.411 9.51C484.859 9.29533 485.359 9.188 485.909 9.188ZM492.611 10.378V14.9C492.611 15.2733 492.69 15.5393 492.849 15.698C493.007 15.8473 493.283 15.922 493.675 15.922H494.613V17H493.465C492.755 17 492.223 16.8367 491.869 16.51C491.514 16.1833 491.337 15.6467 491.337 14.9V10.378H490.343V9.328H491.337V7.396H492.611V9.328H494.613V10.378H492.611ZM507.379 17L506.105 15.712C505.629 16.2067 505.12 16.5753 504.579 16.818C504.037 17.0513 503.426 17.168 502.745 17.168C502.073 17.168 501.475 17.0467 500.953 16.804C500.439 16.5613 500.038 16.216 499.749 15.768C499.469 15.32 499.329 14.7973 499.329 14.2C499.329 13.5187 499.52 12.9213 499.903 12.408C500.295 11.8853 500.869 11.4747 501.625 11.176C501.326 10.8213 501.111 10.4947 500.981 10.196C500.85 9.89733 500.785 9.57067 500.785 9.216C500.785 8.80533 500.887 8.43667 501.093 8.11C501.307 7.774 501.611 7.51267 502.003 7.326C502.395 7.13933 502.847 7.046 503.361 7.046C503.865 7.046 504.303 7.144 504.677 7.34C505.05 7.536 505.33 7.81133 505.517 8.166C505.703 8.51133 505.787 8.89867 505.769 9.328H504.495C504.504 8.94533 504.397 8.64667 504.173 8.432C503.949 8.208 503.659 8.096 503.305 8.096C502.931 8.096 502.628 8.20333 502.395 8.418C502.171 8.62333 502.059 8.88933 502.059 9.216C502.059 9.496 502.133 9.76667 502.283 10.028C502.441 10.2893 502.703 10.6113 503.067 10.994L505.979 13.92L506.231 13.528L507.183 11.932H508.555L507.407 13.92C507.248 14.2 507.061 14.494 506.847 14.802L509.045 17H507.379ZM502.745 16.076C503.249 16.076 503.701 15.978 504.103 15.782C504.513 15.586 504.901 15.2827 505.265 14.872L502.395 11.988C501.2 12.4453 500.603 13.1687 500.603 14.158C500.603 14.7087 500.799 15.166 501.191 15.53C501.592 15.894 502.11 16.076 502.745 16.076ZM465.247 26.756C465.508 26.2987 465.891 25.9253 466.395 25.636C466.899 25.3467 467.473 25.202 468.117 25.202C468.807 25.202 469.428 25.3653 469.979 25.692C470.529 26.0187 470.963 26.4807 471.281 27.078C471.598 27.666 471.757 28.352 471.757 29.136C471.757 29.9107 471.598 30.6013 471.281 31.208C470.963 31.8147 470.525 32.286 469.965 32.622C469.414 32.958 468.798 33.126 468.117 33.126C467.454 33.126 466.871 32.9813 466.367 32.692C465.872 32.4027 465.499 32.034 465.247 31.586V33H463.973V22.64H465.247V26.756ZM470.455 29.136C470.455 28.5573 470.338 28.0533 470.105 27.624C469.871 27.1947 469.554 26.868 469.153 26.644C468.761 26.42 468.327 26.308 467.851 26.308C467.384 26.308 466.95 26.4247 466.549 26.658C466.157 26.882 465.839 27.2133 465.597 27.652C465.363 28.0813 465.247 28.5807 465.247 29.15C465.247 29.7287 465.363 30.2373 465.597 30.676C465.839 31.1053 466.157 31.4367 466.549 31.67C466.95 31.894 467.384 32.006 467.851 32.006C468.327 32.006 468.761 31.894 469.153 31.67C469.554 31.4367 469.871 31.1053 470.105 30.676C470.338 30.2373 470.455 29.724 470.455 29.136ZM472.957 29.136C472.957 28.352 473.116 27.666 473.433 27.078C473.751 26.4807 474.185 26.0187 474.735 25.692C475.295 25.3653 475.916 25.202 476.597 25.202C477.269 25.202 477.853 25.3467 478.347 25.636C478.842 25.9253 479.211 26.2893 479.453 26.728V25.328H480.741V33H479.453V31.572C479.201 32.02 478.823 32.3933 478.319 32.692C477.825 32.9813 477.246 33.126 476.583 33.126C475.902 33.126 475.286 32.958 474.735 32.622C474.185 32.286 473.751 31.8147 473.433 31.208C473.116 30.6013 472.957 29.9107 472.957 29.136ZM479.453 29.15C479.453 28.5713 479.337 28.0673 479.103 27.638C478.87 27.2087 478.553 26.882 478.151 26.658C477.759 26.4247 477.325 26.308 476.849 26.308C476.373 26.308 475.939 26.42 475.547 26.644C475.155 26.868 474.843 27.1947 474.609 27.624C474.376 28.0533 474.259 28.5573 474.259 29.136C474.259 29.724 474.376 30.2373 474.609 30.676C474.843 31.1053 475.155 31.4367 475.547 31.67C475.939 31.894 476.373 32.006 476.849 32.006C477.325 32.006 477.759 31.894 478.151 31.67C478.553 31.4367 478.87 31.1053 479.103 30.676C479.337 30.2373 479.453 29.7287 479.453 29.15ZM482.418 29.15C482.418 28.3567 482.577 27.666 482.894 27.078C483.212 26.4807 483.65 26.0187 484.21 25.692C484.78 25.3653 485.428 25.202 486.156 25.202C487.099 25.202 487.874 25.4307 488.48 25.888C489.096 26.3453 489.502 26.98 489.698 27.792H488.326C488.196 27.3253 487.939 26.9567 487.556 26.686C487.183 26.4153 486.716 26.28 486.156 26.28C485.428 26.28 484.84 26.532 484.392 27.036C483.944 27.5307 483.72 28.2353 483.72 29.15C483.72 30.074 483.944 30.788 484.392 31.292C484.84 31.796 485.428 32.048 486.156 32.048C486.716 32.048 487.183 31.9173 487.556 31.656C487.93 31.3947 488.186 31.0213 488.326 30.536H489.698C489.493 31.32 489.082 31.95 488.466 32.426C487.85 32.8927 487.08 33.126 486.156 33.126C485.428 33.126 484.78 32.9627 484.21 32.636C483.65 32.3093 483.212 31.8473 482.894 31.25C482.577 30.6527 482.418 29.9527 482.418 29.15ZM495.682 33L492.672 29.612V33H491.398V22.64H492.672V28.73L495.626 25.328H497.404L493.792 29.15L497.418 33H495.682ZM508.823 25.328L506.429 33H505.113L503.265 26.91L501.417 33H500.101L497.693 25.328H498.995L500.759 31.768L502.663 25.328H503.965L505.827 31.782L507.563 25.328H508.823ZM509.612 29.136C509.612 28.352 509.77 27.666 510.088 27.078C510.405 26.4807 510.839 26.0187 511.39 25.692C511.95 25.3653 512.57 25.202 513.252 25.202C513.924 25.202 514.507 25.3467 515.002 25.636C515.496 25.9253 515.865 26.2893 516.108 26.728V25.328H517.396V33H516.108V31.572C515.856 32.02 515.478 32.3933 514.974 32.692C514.479 32.9813 513.9 33.126 513.238 33.126C512.556 33.126 511.94 32.958 511.39 32.622C510.839 32.286 510.405 31.8147 510.088 31.208C509.77 30.6013 509.612 29.9107 509.612 29.136ZM516.108 29.15C516.108 28.5713 515.991 28.0673 515.758 27.638C515.524 27.2087 515.207 26.882 514.806 26.658C514.414 26.4247 513.98 26.308 513.504 26.308C513.028 26.308 512.594 26.42 512.202 26.644C511.81 26.868 511.497 27.1947 511.264 27.624C511.03 28.0533 510.914 28.5573 510.914 29.136C510.914 29.724 511.03 30.2373 511.264 30.676C511.497 31.1053 511.81 31.4367 512.202 31.67C512.594 31.894 513.028 32.006 513.504 32.006C513.98 32.006 514.414 31.894 514.806 31.67C515.207 31.4367 515.524 31.1053 515.758 30.676C515.991 30.2373 516.108 29.7287 516.108 29.15ZM520.823 26.574C521.047 26.1353 521.364 25.7947 521.775 25.552C522.195 25.3093 522.703 25.188 523.301 25.188V26.504H522.965C521.537 26.504 520.823 27.2787 520.823 28.828V33H519.549V25.328H520.823V26.574ZM524.295 29.136C524.295 28.352 524.454 27.666 524.771 27.078C525.089 26.4807 525.523 26.0187 526.073 25.692C526.633 25.3653 527.259 25.202 527.949 25.202C528.547 25.202 529.102 25.342 529.615 25.622C530.129 25.8927 530.521 26.252 530.791 26.7V22.64H532.079V33H530.791V31.558C530.539 32.0153 530.166 32.3933 529.671 32.692C529.177 32.9813 528.598 33.126 527.935 33.126C527.254 33.126 526.633 32.958 526.073 32.622C525.523 32.286 525.089 31.8147 524.771 31.208C524.454 30.6013 524.295 29.9107 524.295 29.136ZM530.791 29.15C530.791 28.5713 530.675 28.0673 530.441 27.638C530.208 27.2087 529.891 26.882 529.489 26.658C529.097 26.4247 528.663 26.308 528.187 26.308C527.711 26.308 527.277 26.42 526.885 26.644C526.493 26.868 526.181 27.1947 525.947 27.624C525.714 28.0533 525.597 28.5573 525.597 29.136C525.597 29.724 525.714 30.2373 525.947 30.676C526.181 31.1053 526.493 31.4367 526.885 31.67C527.277 31.894 527.711 32.006 528.187 32.006C528.663 32.006 529.097 31.894 529.489 31.67C529.891 31.4367 530.208 31.1053 530.441 30.676C530.675 30.2373 530.791 29.7287 530.791 29.15Z" fill={activeButtonColor}/>
      </g>
    </svg>
  )
}

export default RobotMovementObliquely