import { useTheme } from '@mui/material/styles'
import { MovementAction } from '../buttonActions'

const RobotMovement = () => {
  const theme = useTheme()
  const activeButtonColor = theme.palette.mode === 'light' ? theme.palette.blue[100] : theme.palette.common.white

  return (
    <svg width="534" height="41" viewBox="0 0 534 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g data-action={MovementAction.BACKWARD}>
        <rect x="131.973" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M141.785 12.3916L142.995 15.1516H143.735L143.025 12.3916H141.785Z" fill="#28BDEB"/>
        <path d="M156.59 24.8659L161.233 24.8659L153.495 32.1405L145.758 24.8659L150.4 24.8659L150.4 19.0463L156.59 19.0463L156.59 24.8659Z" fill="#28BDEB"/>
        <path d="M186.297 18.756C186.559 18.2987 186.941 17.9253 187.445 17.636C187.949 17.3467 188.523 17.202 189.167 17.202C189.858 17.202 190.479 17.3653 191.029 17.692C191.58 18.0187 192.014 18.4807 192.331 19.078C192.649 19.666 192.807 20.352 192.807 21.136C192.807 21.9107 192.649 22.6013 192.331 23.208C192.014 23.8147 191.575 24.286 191.015 24.622C190.465 24.958 189.849 25.126 189.167 25.126C188.505 25.126 187.921 24.9813 187.417 24.692C186.923 24.4027 186.549 24.034 186.297 23.586V25H185.023V14.64H186.297V18.756ZM191.505 21.136C191.505 20.5573 191.389 20.0533 191.155 19.624C190.922 19.1947 190.605 18.868 190.203 18.644C189.811 18.42 189.377 18.308 188.901 18.308C188.435 18.308 188.001 18.4247 187.599 18.658C187.207 18.882 186.89 19.2133 186.647 19.652C186.414 20.0813 186.297 20.5807 186.297 21.15C186.297 21.7287 186.414 22.2373 186.647 22.676C186.89 23.1053 187.207 23.4367 187.599 23.67C188.001 23.894 188.435 24.006 188.901 24.006C189.377 24.006 189.811 23.894 190.203 23.67C190.605 23.4367 190.922 23.1053 191.155 22.676C191.389 22.2373 191.505 21.724 191.505 21.136ZM194.008 21.136C194.008 20.352 194.167 19.666 194.484 19.078C194.802 18.4807 195.236 18.0187 195.786 17.692C196.346 17.3653 196.967 17.202 197.648 17.202C198.32 17.202 198.904 17.3467 199.398 17.636C199.893 17.9253 200.262 18.2893 200.504 18.728V17.328H201.792V25H200.504V23.572C200.252 24.02 199.874 24.3933 199.37 24.692C198.876 24.9813 198.297 25.126 197.634 25.126C196.953 25.126 196.337 24.958 195.786 24.622C195.236 24.286 194.802 23.8147 194.484 23.208C194.167 22.6013 194.008 21.9107 194.008 21.136ZM200.504 21.15C200.504 20.5713 200.388 20.0673 200.154 19.638C199.921 19.2087 199.604 18.882 199.202 18.658C198.81 18.4247 198.376 18.308 197.9 18.308C197.424 18.308 196.99 18.42 196.598 18.644C196.206 18.868 195.894 19.1947 195.66 19.624C195.427 20.0533 195.31 20.5573 195.31 21.136C195.31 21.724 195.427 22.2373 195.66 22.676C195.894 23.1053 196.206 23.4367 196.598 23.67C196.99 23.894 197.424 24.006 197.9 24.006C198.376 24.006 198.81 23.894 199.202 23.67C199.604 23.4367 199.921 23.1053 200.154 22.676C200.388 22.2373 200.504 21.7287 200.504 21.15ZM203.469 21.15C203.469 20.3567 203.628 19.666 203.945 19.078C204.263 18.4807 204.701 18.0187 205.261 17.692C205.831 17.3653 206.479 17.202 207.207 17.202C208.15 17.202 208.925 17.4307 209.531 17.888C210.147 18.3453 210.553 18.98 210.749 19.792H209.377C209.247 19.3253 208.99 18.9567 208.607 18.686C208.234 18.4153 207.767 18.28 207.207 18.28C206.479 18.28 205.891 18.532 205.443 19.036C204.995 19.5307 204.771 20.2353 204.771 21.15C204.771 22.074 204.995 22.788 205.443 23.292C205.891 23.796 206.479 24.048 207.207 24.048C207.767 24.048 208.234 23.9173 208.607 23.656C208.981 23.3947 209.237 23.0213 209.377 22.536H210.749C210.544 23.32 210.133 23.95 209.517 24.426C208.901 24.8927 208.131 25.126 207.207 25.126C206.479 25.126 205.831 24.9627 205.261 24.636C204.701 24.3093 204.263 23.8473 203.945 23.25C203.628 22.6527 203.469 21.9527 203.469 21.15ZM216.733 25L213.723 21.612V25H212.449V14.64H213.723V20.73L216.677 17.328H218.455L214.843 21.15L218.469 25H216.733ZM229.874 17.328L227.48 25H226.164L224.316 18.91L222.468 25H221.152L218.744 17.328H220.046L221.81 23.768L223.714 17.328H225.016L226.878 23.782L228.614 17.328H229.874ZM230.663 21.136C230.663 20.352 230.821 19.666 231.139 19.078C231.456 18.4807 231.89 18.0187 232.441 17.692C233.001 17.3653 233.621 17.202 234.303 17.202C234.975 17.202 235.558 17.3467 236.053 17.636C236.547 17.9253 236.916 18.2893 237.159 18.728V17.328H238.447V25H237.159V23.572C236.907 24.02 236.529 24.3933 236.025 24.692C235.53 24.9813 234.951 25.126 234.289 25.126C233.607 25.126 232.991 24.958 232.441 24.622C231.89 24.286 231.456 23.8147 231.139 23.208C230.821 22.6013 230.663 21.9107 230.663 21.136ZM237.159 21.15C237.159 20.5713 237.042 20.0673 236.809 19.638C236.575 19.2087 236.258 18.882 235.857 18.658C235.465 18.4247 235.031 18.308 234.555 18.308C234.079 18.308 233.645 18.42 233.253 18.644C232.861 18.868 232.548 19.1947 232.315 19.624C232.081 20.0533 231.965 20.5573 231.965 21.136C231.965 21.724 232.081 22.2373 232.315 22.676C232.548 23.1053 232.861 23.4367 233.253 23.67C233.645 23.894 234.079 24.006 234.555 24.006C235.031 24.006 235.465 23.894 235.857 23.67C236.258 23.4367 236.575 23.1053 236.809 22.676C237.042 22.2373 237.159 21.7287 237.159 21.15ZM241.873 18.574C242.097 18.1353 242.415 17.7947 242.825 17.552C243.245 17.3093 243.754 17.188 244.351 17.188V18.504H244.015C242.587 18.504 241.873 19.2787 241.873 20.828V25H240.599V17.328H241.873V18.574ZM245.346 21.136C245.346 20.352 245.505 19.666 245.822 19.078C246.139 18.4807 246.573 18.0187 247.124 17.692C247.684 17.3653 248.309 17.202 249 17.202C249.597 17.202 250.153 17.342 250.666 17.622C251.179 17.8927 251.571 18.252 251.842 18.7V14.64H253.13V25H251.842V23.558C251.59 24.0153 251.217 24.3933 250.722 24.692C250.227 24.9813 249.649 25.126 248.986 25.126C248.305 25.126 247.684 24.958 247.124 24.622C246.573 24.286 246.139 23.8147 245.822 23.208C245.505 22.6013 245.346 21.9107 245.346 21.136ZM251.842 21.15C251.842 20.5713 251.725 20.0673 251.492 19.638C251.259 19.2087 250.941 18.882 250.54 18.658C250.148 18.4247 249.714 18.308 249.238 18.308C248.762 18.308 248.328 18.42 247.936 18.644C247.544 18.868 247.231 19.1947 246.998 19.624C246.765 20.0533 246.648 20.5573 246.648 21.136C246.648 21.724 246.765 22.2373 246.998 22.676C247.231 23.1053 247.544 23.4367 247.936 23.67C248.328 23.894 248.762 24.006 249.238 24.006C249.714 24.006 250.148 23.894 250.54 23.67C250.941 23.4367 251.259 23.1053 251.492 22.676C251.725 22.2373 251.842 21.7287 251.842 21.15Z" fill={activeButtonColor}/>
      </g>
      <g data-action={MovementAction.LEFTWARD_ROTATION}>
        <rect x="279.447" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M285.347 8.48047C285.122 8.48047 284.931 8.40247 284.775 8.24647C284.628 8.09047 284.554 7.89981 284.554 7.67447C284.554 7.44914 284.628 7.25847 284.775 7.10247C284.931 6.94647 285.122 6.86847 285.347 6.86847C285.572 6.86847 285.759 6.94647 285.906 7.10247C286.062 7.25847 286.14 7.44914 286.14 7.67447C286.14 7.89981 286.062 8.09047 285.906 8.24647C285.759 8.40247 285.572 8.48047 285.347 8.48047ZM285.932 18.3085C285.932 18.9411 285.772 19.4048 285.451 19.6995C285.13 19.9941 284.662 20.1415 284.047 20.1415H283.358V19.1405H283.852C284.181 19.1405 284.411 19.0755 284.541 18.9455C284.68 18.8155 284.749 18.5945 284.749 18.2825V9.63747H285.932V18.3085Z" fill="#28BDEB"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M302.411 20.137V16.6654L297.421 21.8345L302.411 26.89V22.667C304.915 23.2422 306.792 25.5484 306.792 28.3223C306.792 31.1984 304.774 33.5716 302.132 34.034L301.935 34.0685V36.5716L302.204 36.5371C306.164 36.0282 309.211 32.5422 309.211 28.3223C309.211 24.1765 306.27 20.739 302.411 20.137ZM296.757 24.8056L295.059 23.035L294.891 23.2595C293.993 24.4591 293.432 25.8467 293.262 27.2882L293.23 27.5542H295.665L295.696 27.3527C295.826 26.5132 296.153 25.6912 296.648 24.9652L296.757 24.8056ZM295.665 29.0903H293.23L293.262 29.3563C293.432 30.7968 293.982 32.1846 294.882 33.385L295.05 33.6096L296.746 31.8402L296.64 31.6811C296.153 30.9537 295.826 30.1412 295.696 29.2923L295.665 29.0903ZM297.983 33.0313L297.814 32.9056L296.09 34.7039L296.293 34.8667C297.454 35.7998 298.807 36.3606 300.2 36.5371L300.468 36.5711V34.0592L300.272 34.0241C299.463 33.8796 298.681 33.552 297.983 33.0313Z" fill="#28BDEB"/>
        <path d="M333.774 6.64V17H332.5V6.64H333.774ZM342.945 12.87C342.945 13.1127 342.931 13.3693 342.903 13.64H336.771C336.818 14.396 337.075 14.9887 337.541 15.418C338.017 15.838 338.591 16.048 339.263 16.048C339.814 16.048 340.271 15.922 340.635 15.67C341.009 15.4087 341.27 15.0633 341.419 14.634H342.791C342.586 15.3713 342.175 15.9733 341.559 16.44C340.943 16.8973 340.178 17.126 339.263 17.126C338.535 17.126 337.882 16.9627 337.303 16.636C336.734 16.3093 336.286 15.8473 335.959 15.25C335.633 14.6433 335.469 13.9433 335.469 13.15C335.469 12.3567 335.628 11.6613 335.945 11.064C336.263 10.4667 336.706 10.0093 337.275 9.692C337.854 9.36533 338.517 9.202 339.263 9.202C339.991 9.202 340.635 9.36067 341.195 9.678C341.755 9.99533 342.185 10.434 342.483 10.994C342.791 11.5447 342.945 12.17 342.945 12.87ZM341.629 12.604C341.629 12.1187 341.522 11.7033 341.307 11.358C341.093 11.0033 340.799 10.7373 340.425 10.56C340.061 10.3733 339.655 10.28 339.207 10.28C338.563 10.28 338.013 10.4853 337.555 10.896C337.107 11.3067 336.851 11.876 336.785 12.604H341.629ZM347.749 10.378H346.139V17H344.865V10.378H343.871V9.328H344.865V8.782C344.865 7.92333 345.084 7.298 345.523 6.906C345.971 6.50467 346.685 6.304 347.665 6.304V7.368C347.105 7.368 346.708 7.48 346.475 7.704C346.251 7.91867 346.139 8.278 346.139 8.782V9.328H347.749V10.378ZM350.788 10.378V14.9C350.788 15.2733 350.868 15.5393 351.026 15.698C351.185 15.8473 351.46 15.922 351.852 15.922H352.79V17H351.642C350.933 17 350.401 16.8367 350.046 16.51C349.692 16.1833 349.514 15.6467 349.514 14.9V10.378H348.52V9.328H349.514V7.396H350.788V9.328H352.79V10.378H350.788ZM364.554 9.328L362.16 17H360.844L358.996 10.91L357.148 17H355.832L353.424 9.328H354.726L356.49 15.768L358.394 9.328H359.696L361.558 15.782L363.294 9.328H364.554ZM365.342 13.136C365.342 12.352 365.501 11.666 365.818 11.078C366.136 10.4807 366.57 10.0187 367.12 9.692C367.68 9.36533 368.301 9.202 368.982 9.202C369.654 9.202 370.238 9.34667 370.732 9.636C371.227 9.92533 371.596 10.2893 371.838 10.728V9.328H373.126V17H371.838V15.572C371.586 16.02 371.208 16.3933 370.704 16.692C370.21 16.9813 369.631 17.126 368.968 17.126C368.287 17.126 367.671 16.958 367.12 16.622C366.57 16.286 366.136 15.8147 365.818 15.208C365.501 14.6013 365.342 13.9107 365.342 13.136ZM371.838 13.15C371.838 12.5713 371.722 12.0673 371.488 11.638C371.255 11.2087 370.938 10.882 370.536 10.658C370.144 10.4247 369.71 10.308 369.234 10.308C368.758 10.308 368.324 10.42 367.932 10.644C367.54 10.868 367.228 11.1947 366.994 11.624C366.761 12.0533 366.644 12.5573 366.644 13.136C366.644 13.724 366.761 14.2373 366.994 14.676C367.228 15.1053 367.54 15.4367 367.932 15.67C368.324 15.894 368.758 16.006 369.234 16.006C369.71 16.006 370.144 15.894 370.536 15.67C370.938 15.4367 371.255 15.1053 371.488 14.676C371.722 14.2373 371.838 13.7287 371.838 13.15ZM376.553 10.574C376.777 10.1353 377.095 9.79467 377.505 9.552C377.925 9.30933 378.434 9.188 379.031 9.188V10.504H378.695C377.267 10.504 376.553 11.2787 376.553 12.828V17H375.279V9.328H376.553V10.574ZM380.026 13.136C380.026 12.352 380.184 11.666 380.502 11.078C380.819 10.4807 381.253 10.0187 381.804 9.692C382.364 9.36533 382.989 9.202 383.68 9.202C384.277 9.202 384.832 9.342 385.346 9.622C385.859 9.89267 386.251 10.252 386.522 10.7V6.64H387.81V17H386.522V15.558C386.27 16.0153 385.896 16.3933 385.402 16.692C384.907 16.9813 384.328 17.126 383.666 17.126C382.984 17.126 382.364 16.958 381.804 16.622C381.253 16.286 380.819 15.8147 380.502 15.208C380.184 14.6013 380.026 13.9107 380.026 13.136ZM386.522 13.15C386.522 12.5713 386.405 12.0673 386.172 11.638C385.938 11.2087 385.621 10.882 385.22 10.658C384.828 10.4247 384.394 10.308 383.918 10.308C383.442 10.308 383.008 10.42 382.616 10.644C382.224 10.868 381.911 11.1947 381.678 11.624C381.444 12.0533 381.328 12.5573 381.328 13.136C381.328 13.724 381.444 14.2373 381.678 14.676C381.911 15.1053 382.224 15.4367 382.616 15.67C383.008 15.894 383.442 16.006 383.918 16.006C384.394 16.006 384.828 15.894 385.22 15.67C385.621 15.4367 385.938 15.1053 386.172 14.676C386.405 14.2373 386.522 13.7287 386.522 13.15ZM333.774 26.574C333.998 26.1353 334.315 25.7947 334.726 25.552C335.146 25.3093 335.655 25.188 336.252 25.188V26.504H335.916C334.488 26.504 333.774 27.2787 333.774 28.828V33H332.5V25.328H333.774V26.574ZM341.069 33.126C340.35 33.126 339.697 32.9627 339.109 32.636C338.53 32.3093 338.073 31.8473 337.737 31.25C337.41 30.6433 337.247 29.9433 337.247 29.15C337.247 28.366 337.415 27.6753 337.751 27.078C338.096 26.4713 338.563 26.0093 339.151 25.692C339.739 25.3653 340.397 25.202 341.125 25.202C341.853 25.202 342.511 25.3653 343.099 25.692C343.687 26.0093 344.149 26.4667 344.485 27.064C344.83 27.6613 345.003 28.3567 345.003 29.15C345.003 29.9433 344.825 30.6433 344.471 31.25C344.125 31.8473 343.654 32.3093 343.057 32.636C342.459 32.9627 341.797 33.126 341.069 33.126ZM341.069 32.006C341.526 32.006 341.955 31.8987 342.357 31.684C342.758 31.4693 343.08 31.1473 343.323 30.718C343.575 30.2887 343.701 29.766 343.701 29.15C343.701 28.534 343.579 28.0113 343.337 27.582C343.094 27.1527 342.777 26.8353 342.385 26.63C341.993 26.4153 341.568 26.308 341.111 26.308C340.644 26.308 340.215 26.4153 339.823 26.63C339.44 26.8353 339.132 27.1527 338.899 27.582C338.665 28.0113 338.549 28.534 338.549 29.15C338.549 29.7753 338.661 30.3027 338.885 30.732C339.118 31.1613 339.426 31.4833 339.809 31.698C340.191 31.9033 340.611 32.006 341.069 32.006ZM348.232 26.378V30.9C348.232 31.2733 348.311 31.5393 348.47 31.698C348.628 31.8473 348.904 31.922 349.296 31.922H350.234V33H349.086C348.376 33 347.844 32.8367 347.49 32.51C347.135 32.1833 346.958 31.6467 346.958 30.9V26.378H345.964V25.328H346.958V23.396H348.232V25.328H350.234V26.378H348.232ZM351.301 29.136C351.301 28.352 351.46 27.666 351.777 27.078C352.095 26.4807 352.529 26.0187 353.079 25.692C353.639 25.3653 354.26 25.202 354.941 25.202C355.613 25.202 356.197 25.3467 356.691 25.636C357.186 25.9253 357.555 26.2893 357.797 26.728V25.328H359.085V33H357.797V31.572C357.545 32.02 357.167 32.3933 356.663 32.692C356.169 32.9813 355.59 33.126 354.927 33.126C354.246 33.126 353.63 32.958 353.079 32.622C352.529 32.286 352.095 31.8147 351.777 31.208C351.46 30.6013 351.301 29.9107 351.301 29.136ZM357.797 29.15C357.797 28.5713 357.681 28.0673 357.447 27.638C357.214 27.2087 356.897 26.882 356.495 26.658C356.103 26.4247 355.669 26.308 355.193 26.308C354.717 26.308 354.283 26.42 353.891 26.644C353.499 26.868 353.187 27.1947 352.953 27.624C352.72 28.0533 352.603 28.5573 352.603 29.136C352.603 29.724 352.72 30.2373 352.953 30.676C353.187 31.1053 353.499 31.4367 353.891 31.67C354.283 31.894 354.717 32.006 355.193 32.006C355.669 32.006 356.103 31.894 356.495 31.67C356.897 31.4367 357.214 31.1053 357.447 30.676C357.681 30.2373 357.797 29.7287 357.797 29.15ZM362.792 26.378V30.9C362.792 31.2733 362.871 31.5393 363.03 31.698C363.189 31.8473 363.464 31.922 363.856 31.922H364.794V33H363.646C362.937 33 362.405 32.8367 362.05 32.51C361.695 32.1833 361.518 31.6467 361.518 30.9V26.378H360.524V25.328H361.518V23.396H362.792V25.328H364.794V26.378H362.792ZM366.996 24.082C366.753 24.082 366.548 23.998 366.38 23.83C366.212 23.662 366.128 23.4567 366.128 23.214C366.128 22.9713 366.212 22.766 366.38 22.598C366.548 22.43 366.753 22.346 366.996 22.346C367.229 22.346 367.425 22.43 367.584 22.598C367.752 22.766 367.836 22.9713 367.836 23.214C367.836 23.4567 367.752 23.662 367.584 23.83C367.425 23.998 367.229 24.082 366.996 24.082ZM367.612 25.328V33H366.338V25.328H367.612ZM373.129 33.126C372.41 33.126 371.757 32.9627 371.169 32.636C370.59 32.3093 370.133 31.8473 369.797 31.25C369.47 30.6433 369.307 29.9433 369.307 29.15C369.307 28.366 369.475 27.6753 369.811 27.078C370.156 26.4713 370.623 26.0093 371.211 25.692C371.799 25.3653 372.457 25.202 373.185 25.202C373.913 25.202 374.571 25.3653 375.159 25.692C375.747 26.0093 376.209 26.4667 376.545 27.064C376.89 27.6613 377.063 28.3567 377.063 29.15C377.063 29.9433 376.886 30.6433 376.531 31.25C376.186 31.8473 375.714 32.3093 375.117 32.636C374.52 32.9627 373.857 33.126 373.129 33.126ZM373.129 32.006C373.586 32.006 374.016 31.8987 374.417 31.684C374.818 31.4693 375.14 31.1473 375.383 30.718C375.635 30.2887 375.761 29.766 375.761 29.15C375.761 28.534 375.64 28.0113 375.397 27.582C375.154 27.1527 374.837 26.8353 374.445 26.63C374.053 26.4153 373.628 26.308 373.171 26.308C372.704 26.308 372.275 26.4153 371.883 26.63C371.5 26.8353 371.192 27.1527 370.959 27.582C370.726 28.0113 370.609 28.534 370.609 29.15C370.609 29.7753 370.721 30.3027 370.945 30.732C371.178 31.1613 371.486 31.4833 371.869 31.698C372.252 31.9033 372.672 32.006 373.129 32.006ZM382.476 25.188C383.409 25.188 384.165 25.4727 384.744 26.042C385.323 26.602 385.612 27.414 385.612 28.478V33H384.352V28.66C384.352 27.8947 384.161 27.3113 383.778 26.91C383.395 26.4993 382.873 26.294 382.21 26.294C381.538 26.294 381.001 26.504 380.6 26.924C380.208 27.344 380.012 27.9553 380.012 28.758V33H378.738V25.328H380.012V26.42C380.264 26.028 380.605 25.7247 381.034 25.51C381.473 25.2953 381.953 25.188 382.476 25.188Z" fill={activeButtonColor}/>
      </g>
      <g data-action={MovementAction.RIGHTWARD_ROTATION}>
        <rect x="413.922" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB"/>
        <path d="M420.368 7.14147V16.7615H419.185V7.14147H420.368Z" fill="#28BDEB"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M435.19 20.137V16.6654L440.181 21.8345L435.19 26.89V22.667C432.687 23.2422 430.809 25.5484 430.809 28.3223C430.809 31.1984 432.828 33.5716 435.469 34.034L435.666 34.0685V36.5716L435.398 36.5371C431.437 36.0282 428.39 32.5422 428.39 28.3223C428.39 24.1765 431.331 20.739 435.19 20.137ZM440.845 24.8056L442.542 23.035L442.71 23.2595C443.609 24.4591 444.169 25.8467 444.34 27.2882L444.371 27.5542H441.937L441.906 27.3527C441.775 26.5132 441.449 25.6912 440.953 24.9652L440.845 24.8056ZM441.937 29.0903H444.371L444.34 29.3563C444.17 30.7968 443.619 32.1846 442.72 33.385L442.552 33.6096L440.855 31.8402L440.962 31.6811C441.449 30.9537 441.775 30.1412 441.906 29.2923L441.937 29.0903ZM439.619 33.0313L439.787 32.9056L441.511 34.7039L441.309 34.8667C440.148 35.7998 438.795 36.3606 437.401 36.5371L437.133 36.5711V34.0592L437.329 34.0241C438.139 33.8796 438.92 33.552 439.619 33.0313Z" fill="#28BDEB"/>
        <path d="M468.247 10.574C468.471 10.1353 468.788 9.79467 469.199 9.552C469.619 9.30933 470.127 9.188 470.725 9.188V10.504H470.389C468.961 10.504 468.247 11.2787 468.247 12.828V17H466.973V9.328H468.247V10.574ZM472.853 8.082C472.611 8.082 472.405 7.998 472.237 7.83C472.069 7.662 471.985 7.45667 471.985 7.214C471.985 6.97133 472.069 6.766 472.237 6.598C472.405 6.43 472.611 6.346 472.853 6.346C473.087 6.346 473.283 6.43 473.441 6.598C473.609 6.766 473.693 6.97133 473.693 7.214C473.693 7.45667 473.609 7.662 473.441 7.83C473.283 7.998 473.087 8.082 472.853 8.082ZM473.469 9.328V17H472.195V9.328H473.469ZM478.805 9.202C479.467 9.202 480.046 9.34667 480.541 9.636C481.045 9.92533 481.418 10.2893 481.661 10.728V9.328H482.949V17.168C482.949 17.868 482.799 18.4887 482.501 19.03C482.202 19.5807 481.773 20.01 481.213 20.318C480.662 20.626 480.018 20.78 479.281 20.78C478.273 20.78 477.433 20.542 476.761 20.066C476.089 19.59 475.692 18.9413 475.571 18.12H476.831C476.971 18.5867 477.26 18.96 477.699 19.24C478.137 19.5293 478.665 19.674 479.281 19.674C479.981 19.674 480.55 19.4547 480.989 19.016C481.437 18.5773 481.661 17.9613 481.661 17.168V15.558C481.409 16.006 481.035 16.3793 480.541 16.678C480.046 16.9767 479.467 17.126 478.805 17.126C478.123 17.126 477.503 16.958 476.943 16.622C476.392 16.286 475.958 15.8147 475.641 15.208C475.323 14.6013 475.165 13.9107 475.165 13.136C475.165 12.352 475.323 11.666 475.641 11.078C475.958 10.4807 476.392 10.0187 476.943 9.692C477.503 9.36533 478.123 9.202 478.805 9.202ZM481.661 13.15C481.661 12.5713 481.544 12.0673 481.311 11.638C481.077 11.2087 480.76 10.882 480.359 10.658C479.967 10.4247 479.533 10.308 479.057 10.308C478.581 10.308 478.147 10.42 477.755 10.644C477.363 10.868 477.05 11.1947 476.817 11.624C476.583 12.0533 476.467 12.5573 476.467 13.136C476.467 13.724 476.583 14.2373 476.817 14.676C477.05 15.1053 477.363 15.4367 477.755 15.67C478.147 15.894 478.581 16.006 479.057 16.006C479.533 16.006 479.967 15.894 480.359 15.67C480.76 15.4367 481.077 15.1053 481.311 14.676C481.544 14.2373 481.661 13.7287 481.661 13.15ZM488.909 9.188C489.488 9.188 490.011 9.314 490.477 9.566C490.944 9.80867 491.308 10.1773 491.569 10.672C491.84 11.1667 491.975 11.7687 491.975 12.478V17H490.715V12.66C490.715 11.8947 490.524 11.3113 490.141 10.91C489.759 10.4993 489.236 10.294 488.573 10.294C487.901 10.294 487.365 10.504 486.963 10.924C486.571 11.344 486.375 11.9553 486.375 12.758V17H485.101V6.64H486.375V10.42C486.627 10.028 486.973 9.72467 487.411 9.51C487.859 9.29533 488.359 9.188 488.909 9.188ZM495.611 10.378V14.9C495.611 15.2733 495.69 15.5393 495.849 15.698C496.007 15.8473 496.283 15.922 496.675 15.922H497.613V17H496.465C495.755 17 495.223 16.8367 494.869 16.51C494.514 16.1833 494.337 15.6467 494.337 14.9V10.378H493.343V9.328H494.337V7.396H495.611V9.328H497.613V10.378H495.611ZM509.376 9.328L506.982 17H505.666L503.818 10.91L501.97 17H500.654L498.246 9.328H499.548L501.312 15.768L503.216 9.328H504.518L506.38 15.782L508.116 9.328H509.376ZM510.165 13.136C510.165 12.352 510.323 11.666 510.641 11.078C510.958 10.4807 511.392 10.0187 511.943 9.692C512.503 9.36533 513.123 9.202 513.805 9.202C514.477 9.202 515.06 9.34667 515.555 9.636C516.049 9.92533 516.418 10.2893 516.661 10.728V9.328H517.949V17H516.661V15.572C516.409 16.02 516.031 16.3933 515.527 16.692C515.032 16.9813 514.453 17.126 513.791 17.126C513.109 17.126 512.493 16.958 511.943 16.622C511.392 16.286 510.958 15.8147 510.641 15.208C510.323 14.6013 510.165 13.9107 510.165 13.136ZM516.661 13.15C516.661 12.5713 516.544 12.0673 516.311 11.638C516.077 11.2087 515.76 10.882 515.359 10.658C514.967 10.4247 514.533 10.308 514.057 10.308C513.581 10.308 513.147 10.42 512.755 10.644C512.363 10.868 512.05 11.1947 511.817 11.624C511.583 12.0533 511.467 12.5573 511.467 13.136C511.467 13.724 511.583 14.2373 511.817 14.676C512.05 15.1053 512.363 15.4367 512.755 15.67C513.147 15.894 513.581 16.006 514.057 16.006C514.533 16.006 514.967 15.894 515.359 15.67C515.76 15.4367 516.077 15.1053 516.311 14.676C516.544 14.2373 516.661 13.7287 516.661 13.15ZM521.375 10.574C521.599 10.1353 521.917 9.79467 522.327 9.552C522.747 9.30933 523.256 9.188 523.853 9.188V10.504H523.517C522.089 10.504 521.375 11.2787 521.375 12.828V17H520.101V9.328H521.375V10.574ZM524.848 13.136C524.848 12.352 525.007 11.666 525.324 11.078C525.641 10.4807 526.075 10.0187 526.626 9.692C527.186 9.36533 527.811 9.202 528.502 9.202C529.099 9.202 529.655 9.342 530.168 9.622C530.681 9.89267 531.073 10.252 531.344 10.7V6.64H532.632V17H531.344V15.558C531.092 16.0153 530.719 16.3933 530.224 16.692C529.729 16.9813 529.151 17.126 528.488 17.126C527.807 17.126 527.186 16.958 526.626 16.622C526.075 16.286 525.641 15.8147 525.324 15.208C525.007 14.6013 524.848 13.9107 524.848 13.136ZM531.344 13.15C531.344 12.5713 531.227 12.0673 530.994 11.638C530.761 11.2087 530.443 10.882 530.042 10.658C529.65 10.4247 529.216 10.308 528.74 10.308C528.264 10.308 527.83 10.42 527.438 10.644C527.046 10.868 526.733 11.1947 526.5 11.624C526.267 12.0533 526.15 12.5573 526.15 13.136C526.15 13.724 526.267 14.2373 526.5 14.676C526.733 15.1053 527.046 15.4367 527.438 15.67C527.83 15.894 528.264 16.006 528.74 16.006C529.216 16.006 529.65 15.894 530.042 15.67C530.443 15.4367 530.761 15.1053 530.994 14.676C531.227 14.2373 531.344 13.7287 531.344 13.15ZM468.247 26.574C468.471 26.1353 468.788 25.7947 469.199 25.552C469.619 25.3093 470.127 25.188 470.725 25.188V26.504H470.389C468.961 26.504 468.247 27.2787 468.247 28.828V33H466.973V25.328H468.247V26.574ZM475.541 33.126C474.823 33.126 474.169 32.9627 473.581 32.636C473.003 32.3093 472.545 31.8473 472.209 31.25C471.883 30.6433 471.719 29.9433 471.719 29.15C471.719 28.366 471.887 27.6753 472.223 27.078C472.569 26.4713 473.035 26.0093 473.623 25.692C474.211 25.3653 474.869 25.202 475.597 25.202C476.325 25.202 476.983 25.3653 477.571 25.692C478.159 26.0093 478.621 26.4667 478.957 27.064C479.303 27.6613 479.475 28.3567 479.475 29.15C479.475 29.9433 479.298 30.6433 478.943 31.25C478.598 31.8473 478.127 32.3093 477.529 32.636C476.932 32.9627 476.269 33.126 475.541 33.126ZM475.541 32.006C475.999 32.006 476.428 31.8987 476.829 31.684C477.231 31.4693 477.553 31.1473 477.795 30.718C478.047 30.2887 478.173 29.766 478.173 29.15C478.173 28.534 478.052 28.0113 477.809 27.582C477.567 27.1527 477.249 26.8353 476.857 26.63C476.465 26.4153 476.041 26.308 475.583 26.308C475.117 26.308 474.687 26.4153 474.295 26.63C473.913 26.8353 473.605 27.1527 473.371 27.582C473.138 28.0113 473.021 28.534 473.021 29.15C473.021 29.7753 473.133 30.3027 473.357 30.732C473.591 31.1613 473.899 31.4833 474.281 31.698C474.664 31.9033 475.084 32.006 475.541 32.006ZM482.704 26.378V30.9C482.704 31.2733 482.784 31.5393 482.942 31.698C483.101 31.8473 483.376 31.922 483.768 31.922H484.706V33H483.558C482.849 33 482.317 32.8367 481.962 32.51C481.608 32.1833 481.43 31.6467 481.43 30.9V26.378H480.436V25.328H481.43V23.396H482.704V25.328H484.706V26.378H482.704ZM485.774 29.136C485.774 28.352 485.933 27.666 486.25 27.078C486.567 26.4807 487.001 26.0187 487.552 25.692C488.112 25.3653 488.733 25.202 489.414 25.202C490.086 25.202 490.669 25.3467 491.164 25.636C491.659 25.9253 492.027 26.2893 492.27 26.728V25.328H493.558V33H492.27V31.572C492.018 32.02 491.64 32.3933 491.136 32.692C490.641 32.9813 490.063 33.126 489.4 33.126C488.719 33.126 488.103 32.958 487.552 32.622C487.001 32.286 486.567 31.8147 486.25 31.208C485.933 30.6013 485.774 29.9107 485.774 29.136ZM492.27 29.15C492.27 28.5713 492.153 28.0673 491.92 27.638C491.687 27.2087 491.369 26.882 490.968 26.658C490.576 26.4247 490.142 26.308 489.666 26.308C489.19 26.308 488.756 26.42 488.364 26.644C487.972 26.868 487.659 27.1947 487.426 27.624C487.193 28.0533 487.076 28.5573 487.076 29.136C487.076 29.724 487.193 30.2373 487.426 30.676C487.659 31.1053 487.972 31.4367 488.364 31.67C488.756 31.894 489.19 32.006 489.666 32.006C490.142 32.006 490.576 31.894 490.968 31.67C491.369 31.4367 491.687 31.1053 491.92 30.676C492.153 30.2373 492.27 29.7287 492.27 29.15ZM497.265 26.378V30.9C497.265 31.2733 497.344 31.5393 497.503 31.698C497.661 31.8473 497.937 31.922 498.329 31.922H499.267V33H498.119C497.409 33 496.877 32.8367 496.523 32.51C496.168 32.1833 495.991 31.6467 495.991 30.9V26.378H494.997V25.328H495.991V23.396H497.265V25.328H499.267V26.378H497.265ZM501.468 24.082C501.226 24.082 501.02 23.998 500.852 23.83C500.684 23.662 500.6 23.4567 500.6 23.214C500.6 22.9713 500.684 22.766 500.852 22.598C501.02 22.43 501.226 22.346 501.468 22.346C501.702 22.346 501.898 22.43 502.056 22.598C502.224 22.766 502.308 22.9713 502.308 23.214C502.308 23.4567 502.224 23.662 502.056 23.83C501.898 23.998 501.702 24.082 501.468 24.082ZM502.084 25.328V33H500.81V25.328H502.084ZM507.602 33.126C506.883 33.126 506.23 32.9627 505.642 32.636C505.063 32.3093 504.606 31.8473 504.27 31.25C503.943 30.6433 503.78 29.9433 503.78 29.15C503.78 28.366 503.948 27.6753 504.284 27.078C504.629 26.4713 505.096 26.0093 505.684 25.692C506.272 25.3653 506.93 25.202 507.658 25.202C508.386 25.202 509.044 25.3653 509.632 25.692C510.22 26.0093 510.682 26.4667 511.018 27.064C511.363 27.6613 511.536 28.3567 511.536 29.15C511.536 29.9433 511.358 30.6433 511.004 31.25C510.658 31.8473 510.187 32.3093 509.59 32.636C508.992 32.9627 508.33 33.126 507.602 33.126ZM507.602 32.006C508.059 32.006 508.488 31.8987 508.89 31.684C509.291 31.4693 509.613 31.1473 509.856 30.718C510.108 30.2887 510.234 29.766 510.234 29.15C510.234 28.534 510.112 28.0113 509.87 27.582C509.627 27.1527 509.31 26.8353 508.918 26.63C508.526 26.4153 508.101 26.308 507.644 26.308C507.177 26.308 506.748 26.4153 506.356 26.63C505.973 26.8353 505.665 27.1527 505.432 27.582C505.198 28.0113 505.082 28.534 505.082 29.15C505.082 29.7753 505.194 30.3027 505.418 30.732C505.651 31.1613 505.959 31.4833 506.342 31.698C506.724 31.9033 507.144 32.006 507.602 32.006ZM516.949 25.188C517.882 25.188 518.638 25.4727 519.217 26.042C519.795 26.602 520.085 27.414 520.085 28.478V33H518.825V28.66C518.825 27.8947 518.633 27.3113 518.251 26.91C517.868 26.4993 517.345 26.294 516.683 26.294C516.011 26.294 515.474 26.504 515.073 26.924C514.681 27.344 514.485 27.9553 514.485 28.758V33H513.211V25.328H514.485V26.42C514.737 26.028 515.077 25.7247 515.507 25.51C515.945 25.2953 516.426 25.188 516.949 25.188Z" fill={activeButtonColor}/>
      </g>
      <g data-action={MovementAction.FORWARD}>
        <rect x="0.5" y="0.5" width="39.4732" height="39.4732" rx="3.5" stroke="#28BDEB" fill="#28BDEB"/>
        <path d="M6.92645 8.4806C6.70112 8.4806 6.51045 8.4026 6.35445 8.2466C6.19845 8.0906 6.12045 7.89993 6.12045 7.6746C6.12045 7.44926 6.19845 7.2586 6.35445 7.1026C6.51045 6.9466 6.70112 6.8686 6.92645 6.8686C7.14312 6.8686 7.32512 6.9466 7.47245 7.1026C7.62845 7.2586 7.70645 7.44926 7.70645 7.6746C7.70645 7.89993 7.62845 8.0906 7.47245 8.2466C7.32512 8.4026 7.14312 8.4806 6.92645 8.4806ZM7.49845 9.6376V16.7616H6.31545V9.6376H7.49845Z" fill="white"/>
        <path d="M18.9272 26.3208H14.2847L22.0222 19.0462L29.7598 26.3208H25.1173V32.1405H18.9272V26.3208Z" fill="white"/>
        <path d="M56.6727 18.378H55.0627V25H53.7887V18.378H52.7947V17.328H53.7887V16.782C53.7887 15.9233 54.008 15.298 54.4467 14.906C54.8947 14.5047 55.6087 14.304 56.5887 14.304V15.368C56.0287 15.368 55.632 15.48 55.3987 15.704C55.1747 15.9187 55.0627 16.278 55.0627 16.782V17.328H56.6727V18.378ZM61.5041 25.126C60.7854 25.126 60.1321 24.9627 59.5441 24.636C58.9654 24.3093 58.5081 23.8473 58.1721 23.25C57.8454 22.6433 57.6821 21.9433 57.6821 21.15C57.6821 20.366 57.8501 19.6753 58.1861 19.078C58.5314 18.4713 58.9981 18.0093 59.5861 17.692C60.1741 17.3653 60.8321 17.202 61.5601 17.202C62.2881 17.202 62.9461 17.3653 63.5341 17.692C64.1221 18.0093 64.5841 18.4667 64.9201 19.064C65.2654 19.6613 65.4381 20.3567 65.4381 21.15C65.4381 21.9433 65.2607 22.6433 64.9061 23.25C64.5607 23.8473 64.0894 24.3093 63.4921 24.636C62.8947 24.9627 62.2321 25.126 61.5041 25.126ZM61.5041 24.006C61.9614 24.006 62.3907 23.8987 62.7921 23.684C63.1934 23.4693 63.5154 23.1473 63.7581 22.718C64.0101 22.2887 64.1361 21.766 64.1361 21.15C64.1361 20.534 64.0147 20.0113 63.7721 19.582C63.5294 19.1527 63.2121 18.8353 62.8201 18.63C62.4281 18.4153 62.0034 18.308 61.5461 18.308C61.0794 18.308 60.6501 18.4153 60.2581 18.63C59.8754 18.8353 59.5674 19.1527 59.3341 19.582C59.1007 20.0113 58.9841 20.534 58.9841 21.15C58.9841 21.7753 59.0961 22.3027 59.3201 22.732C59.5534 23.1613 59.8614 23.4833 60.2441 23.698C60.6267 23.9033 61.0467 24.006 61.5041 24.006ZM68.3872 18.574C68.6112 18.1353 68.9285 17.7947 69.3392 17.552C69.7592 17.3093 70.2678 17.188 70.8652 17.188V18.504H70.5292C69.1012 18.504 68.3872 19.2787 68.3872 20.828V25H67.1132V17.328H68.3872V18.574ZM82.5558 17.328L80.1618 25H78.8458L76.9978 18.91L75.1498 25H73.8338L71.4258 17.328H72.7278L74.4918 23.768L76.3958 17.328H77.6978L79.5598 23.782L81.2958 17.328H82.5558ZM83.3442 21.136C83.3442 20.352 83.5029 19.666 83.8202 19.078C84.1375 18.4807 84.5715 18.0187 85.1222 17.692C85.6822 17.3653 86.3029 17.202 86.9842 17.202C87.6562 17.202 88.2395 17.3467 88.7342 17.636C89.2289 17.9253 89.5975 18.2893 89.8402 18.728V17.328H91.1282V25H89.8402V23.572C89.5882 24.02 89.2102 24.3933 88.7062 24.692C88.2115 24.9813 87.6329 25.126 86.9702 25.126C86.2889 25.126 85.6729 24.958 85.1222 24.622C84.5715 24.286 84.1375 23.8147 83.8202 23.208C83.5029 22.6013 83.3442 21.9107 83.3442 21.136ZM89.8402 21.15C89.8402 20.5713 89.7235 20.0673 89.4902 19.638C89.2569 19.2087 88.9395 18.882 88.5382 18.658C88.1462 18.4247 87.7122 18.308 87.2362 18.308C86.7602 18.308 86.3262 18.42 85.9342 18.644C85.5422 18.868 85.2295 19.1947 84.9962 19.624C84.7629 20.0533 84.6462 20.5573 84.6462 21.136C84.6462 21.724 84.7629 22.2373 84.9962 22.676C85.2295 23.1053 85.5422 23.4367 85.9342 23.67C86.3262 23.894 86.7602 24.006 87.2362 24.006C87.7122 24.006 88.1462 23.894 88.5382 23.67C88.9395 23.4367 89.2569 23.1053 89.4902 22.676C89.7235 22.2373 89.8402 21.7287 89.8402 21.15ZM94.5551 18.574C94.7791 18.1353 95.0965 17.7947 95.5071 17.552C95.9271 17.3093 96.4358 17.188 97.0331 17.188V18.504H96.6971C95.2691 18.504 94.5551 19.2787 94.5551 20.828V25H93.2811V17.328H94.5551V18.574ZM98.0278 21.136C98.0278 20.352 98.1864 19.666 98.5038 19.078C98.8211 18.4807 99.2551 18.0187 99.8058 17.692C100.366 17.3653 100.991 17.202 101.682 17.202C102.279 17.202 102.834 17.342 103.348 17.622C103.861 17.8927 104.253 18.252 104.524 18.7V14.64H105.812V25H104.524V23.558C104.272 24.0153 103.898 24.3933 103.404 24.692C102.909 24.9813 102.33 25.126 101.668 25.126C100.986 25.126 100.366 24.958 99.8058 24.622C99.2551 24.286 98.8211 23.8147 98.5038 23.208C98.1864 22.6013 98.0278 21.9107 98.0278 21.136ZM104.524 21.15C104.524 20.5713 104.407 20.0673 104.174 19.638C103.94 19.2087 103.623 18.882 103.222 18.658C102.83 18.4247 102.396 18.308 101.92 18.308C101.444 18.308 101.01 18.42 100.618 18.644C100.226 18.868 99.9131 19.1947 99.6798 19.624C99.4464 20.0533 99.3298 20.5573 99.3298 21.136C99.3298 21.724 99.4464 22.2373 99.6798 22.676C99.9131 23.1053 100.226 23.4367 100.618 23.67C101.01 23.894 101.444 24.006 101.92 24.006C102.396 24.006 102.83 23.894 103.222 23.67C103.623 23.4367 103.94 23.1053 104.174 22.676C104.407 22.2373 104.524 21.7287 104.524 21.15Z" fill="#28BDEB"/>
      </g>
    </svg>
  )
}

export default RobotMovement