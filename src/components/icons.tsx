import React from 'react'

export const Logo = ({className,height,width}:{width?:number,height?:number,className?:string}) => {
    return (
        <svg className={className} width={width??"347"} height={height??"109"} viewBox="0 0 347 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M133.79 55.926V65H131.97V59.098L129.539 65H128.161L125.717 59.098V65H123.897V55.926H125.964L128.85 62.673L131.736 55.926H133.79ZM135.121 61.373C135.121 60.645 135.264 59.9993 135.55 59.436C135.845 58.8727 136.239 58.4393 136.733 58.136C137.236 57.8327 137.795 57.681 138.41 57.681C138.948 57.681 139.416 57.7893 139.814 58.006C140.222 58.2227 140.547 58.4957 140.789 58.825V57.798H142.622V65H140.789V63.947C140.555 64.285 140.23 64.5667 139.814 64.792C139.407 65.0087 138.935 65.117 138.397 65.117C137.791 65.117 137.236 64.961 136.733 64.649C136.239 64.337 135.845 63.8993 135.55 63.336C135.264 62.764 135.121 62.1097 135.121 61.373ZM140.789 61.399C140.789 60.957 140.703 60.58 140.529 60.268C140.356 59.9473 140.122 59.7047 139.827 59.54C139.533 59.3667 139.216 59.28 138.878 59.28C138.54 59.28 138.228 59.3623 137.942 59.527C137.656 59.6917 137.422 59.9343 137.24 60.255C137.067 60.567 136.98 60.9397 136.98 61.373C136.98 61.8063 137.067 62.1877 137.24 62.517C137.422 62.8377 137.656 63.0847 137.942 63.258C138.237 63.4313 138.549 63.518 138.878 63.518C139.216 63.518 139.533 63.4357 139.827 63.271C140.122 63.0977 140.356 62.855 140.529 62.543C140.703 62.2223 140.789 61.841 140.789 61.399ZM143.932 61.399C143.932 60.6537 144.084 60.0037 144.387 59.449C144.69 58.8857 145.111 58.4523 145.648 58.149C146.185 57.837 146.801 57.681 147.494 57.681C148.387 57.681 149.123 57.9063 149.704 58.357C150.293 58.799 150.688 59.423 150.887 60.229H148.924C148.82 59.917 148.642 59.6743 148.391 59.501C148.148 59.319 147.845 59.228 147.481 59.228C146.961 59.228 146.549 59.4187 146.246 59.8C145.943 60.1727 145.791 60.7057 145.791 61.399C145.791 62.0837 145.943 62.6167 146.246 62.998C146.549 63.3707 146.961 63.557 147.481 63.557C148.218 63.557 148.699 63.2277 148.924 62.569H150.887C150.688 63.349 150.293 63.9687 149.704 64.428C149.115 64.8873 148.378 65.117 147.494 65.117C146.801 65.117 146.185 64.9653 145.648 64.662C145.111 64.35 144.69 63.9167 144.387 63.362C144.084 62.7987 143.932 62.1443 143.932 61.399ZM156.276 57.694C156.822 57.694 157.308 57.8153 157.732 58.058C158.157 58.292 158.486 58.643 158.72 59.111C158.963 59.5703 159.084 60.125 159.084 60.775V65H157.264V61.022C157.264 60.45 157.121 60.0123 156.835 59.709C156.549 59.397 156.159 59.241 155.665 59.241C155.163 59.241 154.764 59.397 154.469 59.709C154.183 60.0123 154.04 60.45 154.04 61.022V65H152.22V55.38H154.04V58.695C154.274 58.383 154.586 58.1403 154.976 57.967C155.366 57.785 155.8 57.694 156.276 57.694ZM161.738 56.94C161.417 56.94 161.149 56.8403 160.932 56.641C160.724 56.433 160.62 56.1773 160.62 55.874C160.62 55.5707 160.724 55.3193 160.932 55.12C161.149 54.912 161.417 54.808 161.738 54.808C162.059 54.808 162.323 54.912 162.531 55.12C162.748 55.3193 162.856 55.5707 162.856 55.874C162.856 56.1773 162.748 56.433 162.531 56.641C162.323 56.8403 162.059 56.94 161.738 56.94ZM162.635 57.798V65H160.815V57.798H162.635ZM168.424 57.694C169.282 57.694 169.975 57.967 170.504 58.513C171.033 59.0503 171.297 59.8043 171.297 60.775V65H169.477V61.022C169.477 60.45 169.334 60.0123 169.048 59.709C168.762 59.397 168.372 59.241 167.878 59.241C167.375 59.241 166.977 59.397 166.682 59.709C166.396 60.0123 166.253 60.45 166.253 61.022V65H164.433V57.798H166.253V58.695C166.496 58.383 166.803 58.1403 167.176 57.967C167.557 57.785 167.973 57.694 168.424 57.694ZM179.723 61.243C179.723 61.503 179.706 61.737 179.671 61.945H174.406C174.449 62.465 174.631 62.8723 174.952 63.167C175.273 63.4617 175.667 63.609 176.135 63.609C176.811 63.609 177.292 63.3187 177.578 62.738H179.541C179.333 63.4313 178.934 64.0033 178.345 64.454C177.756 64.896 177.032 65.117 176.174 65.117C175.481 65.117 174.857 64.9653 174.302 64.662C173.756 64.35 173.327 63.9123 173.015 63.349C172.712 62.7857 172.56 62.1357 172.56 61.399C172.56 60.6537 172.712 59.9993 173.015 59.436C173.318 58.8727 173.743 58.4393 174.289 58.136C174.835 57.8327 175.463 57.681 176.174 57.681C176.859 57.681 177.47 57.8283 178.007 58.123C178.553 58.4177 178.973 58.838 179.268 59.384C179.571 59.9213 179.723 60.541 179.723 61.243ZM177.838 60.723C177.829 60.255 177.66 59.8823 177.331 59.605C177.002 59.319 176.599 59.176 176.122 59.176C175.671 59.176 175.29 59.3147 174.978 59.592C174.675 59.8607 174.488 60.2377 174.419 60.723H177.838ZM182.871 58.916C183.105 58.5347 183.409 58.2357 183.781 58.019C184.163 57.8023 184.596 57.694 185.081 57.694V59.605H184.6C184.028 59.605 183.595 59.7393 183.3 60.008C183.014 60.2767 182.871 60.7447 182.871 61.412V65H181.051V57.798H182.871V58.916ZM187.23 56.94C186.909 56.94 186.641 56.8403 186.424 56.641C186.216 56.433 186.112 56.1773 186.112 55.874C186.112 55.5707 186.216 55.3193 186.424 55.12C186.641 54.912 186.909 54.808 187.23 54.808C187.551 54.808 187.815 54.912 188.023 55.12C188.24 55.3193 188.348 55.5707 188.348 55.874C188.348 56.1773 188.24 56.433 188.023 56.641C187.815 56.8403 187.551 56.94 187.23 56.94ZM188.127 57.798V65H186.307V57.798H188.127ZM196.62 61.243C196.62 61.503 196.603 61.737 196.568 61.945H191.303C191.347 62.465 191.529 62.8723 191.849 63.167C192.17 63.4617 192.564 63.609 193.032 63.609C193.708 63.609 194.189 63.3187 194.475 62.738H196.438C196.23 63.4313 195.832 64.0033 195.242 64.454C194.653 64.896 193.929 65.117 193.071 65.117C192.378 65.117 191.754 64.9653 191.199 64.662C190.653 64.35 190.224 63.9123 189.912 63.349C189.609 62.7857 189.457 62.1357 189.457 61.399C189.457 60.6537 189.609 59.9993 189.912 59.436C190.216 58.8727 190.64 58.4393 191.186 58.136C191.732 57.8327 192.361 57.681 193.071 57.681C193.756 57.681 194.367 57.8283 194.904 58.123C195.45 58.4177 195.871 58.838 196.165 59.384C196.469 59.9213 196.62 60.541 196.62 61.243ZM194.735 60.723C194.727 60.255 194.558 59.8823 194.228 59.605C193.899 59.319 193.496 59.176 193.019 59.176C192.569 59.176 192.187 59.3147 191.875 59.592C191.572 59.8607 191.386 60.2377 191.316 60.723H194.735ZM200.705 65.117C200.115 65.117 199.587 65.013 199.119 64.805C198.651 64.5883 198.278 64.298 198.001 63.934C197.732 63.57 197.585 63.167 197.559 62.725H199.392C199.426 63.0023 199.561 63.232 199.795 63.414C200.037 63.596 200.336 63.687 200.692 63.687C201.038 63.687 201.307 63.6177 201.498 63.479C201.697 63.3403 201.797 63.1627 201.797 62.946C201.797 62.712 201.675 62.5387 201.433 62.426C201.199 62.3047 200.822 62.1747 200.302 62.036C199.764 61.906 199.322 61.7717 198.976 61.633C198.638 61.4943 198.343 61.282 198.092 60.996C197.849 60.71 197.728 60.3243 197.728 59.839C197.728 59.4403 197.84 59.0763 198.066 58.747C198.3 58.4177 198.629 58.1577 199.054 57.967C199.487 57.7763 199.994 57.681 200.575 57.681C201.433 57.681 202.117 57.8977 202.629 58.331C203.14 58.7557 203.422 59.332 203.474 60.06H201.732C201.706 59.774 201.584 59.5487 201.368 59.384C201.16 59.2107 200.878 59.124 200.523 59.124C200.193 59.124 199.938 59.1847 199.756 59.306C199.582 59.4273 199.496 59.5963 199.496 59.813C199.496 60.0557 199.617 60.242 199.86 60.372C200.102 60.4933 200.479 60.619 200.991 60.749C201.511 60.879 201.94 61.0133 202.278 61.152C202.616 61.2907 202.906 61.5073 203.149 61.802C203.4 62.088 203.53 62.4693 203.539 62.946C203.539 63.362 203.422 63.7347 203.188 64.064C202.962 64.3933 202.633 64.6533 202.2 64.844C201.775 65.026 201.277 65.117 200.705 65.117ZM207.662 61.373C207.662 60.645 207.805 59.9993 208.091 59.436C208.386 58.8727 208.78 58.4393 209.274 58.136C209.777 57.8327 210.336 57.681 210.951 57.681C211.489 57.681 211.957 57.7893 212.355 58.006C212.763 58.2227 213.088 58.4957 213.33 58.825V57.798H215.163V65H213.33V63.947C213.096 64.285 212.771 64.5667 212.355 64.792C211.948 65.0087 211.476 65.117 210.938 65.117C210.332 65.117 209.777 64.961 209.274 64.649C208.78 64.337 208.386 63.8993 208.091 63.336C207.805 62.764 207.662 62.1097 207.662 61.373ZM213.33 61.399C213.33 60.957 213.244 60.58 213.07 60.268C212.897 59.9473 212.663 59.7047 212.368 59.54C212.074 59.3667 211.757 59.28 211.419 59.28C211.081 59.28 210.769 59.3623 210.483 59.527C210.197 59.6917 209.963 59.9343 209.781 60.255C209.608 60.567 209.521 60.9397 209.521 61.373C209.521 61.8063 209.608 62.1877 209.781 62.517C209.963 62.8377 210.197 63.0847 210.483 63.258C210.778 63.4313 211.09 63.518 211.419 63.518C211.757 63.518 212.074 63.4357 212.368 63.271C212.663 63.0977 212.897 62.855 213.07 62.543C213.244 62.2223 213.33 61.841 213.33 61.399ZM220.932 57.694C221.79 57.694 222.483 57.967 223.012 58.513C223.541 59.0503 223.805 59.8043 223.805 60.775V65H221.985V61.022C221.985 60.45 221.842 60.0123 221.556 59.709C221.27 59.397 220.88 59.241 220.386 59.241C219.883 59.241 219.485 59.397 219.19 59.709C218.904 60.0123 218.761 60.45 218.761 61.022V65H216.941V57.798H218.761V58.695C219.004 58.383 219.311 58.1403 219.684 57.967C220.065 57.785 220.481 57.694 220.932 57.694ZM225.068 61.373C225.068 60.645 225.211 59.9993 225.497 59.436C225.791 58.8727 226.19 58.4393 226.693 58.136C227.195 57.8327 227.754 57.681 228.37 57.681C228.838 57.681 229.284 57.785 229.709 57.993C230.133 58.1923 230.471 58.461 230.723 58.799V55.38H232.569V65H230.723V63.934C230.497 64.2893 230.181 64.5753 229.774 64.792C229.366 65.0087 228.894 65.117 228.357 65.117C227.75 65.117 227.195 64.961 226.693 64.649C226.19 64.337 225.791 63.8993 225.497 63.336C225.211 62.764 225.068 62.1097 225.068 61.373ZM230.736 61.399C230.736 60.957 230.649 60.58 230.476 60.268C230.302 59.9473 230.068 59.7047 229.774 59.54C229.479 59.3667 229.163 59.28 228.825 59.28C228.487 59.28 228.175 59.3623 227.889 59.527C227.603 59.6917 227.369 59.9343 227.187 60.255C227.013 60.567 226.927 60.9397 226.927 61.373C226.927 61.8063 227.013 62.1877 227.187 62.517C227.369 62.8377 227.603 63.0847 227.889 63.258C228.183 63.4313 228.495 63.518 228.825 63.518C229.163 63.518 229.479 63.4357 229.774 63.271C230.068 63.0977 230.302 62.855 230.476 62.543C230.649 62.2223 230.736 61.841 230.736 61.399ZM240.577 65.091C239.944 65.091 239.372 64.9827 238.861 64.766C238.358 64.5493 237.96 64.2373 237.665 63.83C237.37 63.4227 237.219 62.9417 237.21 62.387H239.16C239.186 62.7597 239.316 63.0543 239.55 63.271C239.793 63.4877 240.122 63.596 240.538 63.596C240.963 63.596 241.296 63.4963 241.539 63.297C241.782 63.089 241.903 62.8203 241.903 62.491C241.903 62.2223 241.821 62.0013 241.656 61.828C241.491 61.6547 241.283 61.5203 241.032 61.425C240.789 61.321 240.451 61.2083 240.018 61.087C239.429 60.9137 238.948 60.7447 238.575 60.58C238.211 60.4067 237.895 60.151 237.626 59.813C237.366 59.4663 237.236 59.007 237.236 58.435C237.236 57.8977 237.37 57.4297 237.639 57.031C237.908 56.6323 238.285 56.329 238.77 56.121C239.255 55.9043 239.81 55.796 240.434 55.796C241.37 55.796 242.128 56.0257 242.709 56.485C243.298 56.9357 243.623 57.5683 243.684 58.383H241.682C241.665 58.071 241.53 57.8153 241.279 57.616C241.036 57.408 240.711 57.304 240.304 57.304C239.949 57.304 239.663 57.395 239.446 57.577C239.238 57.759 239.134 58.0233 239.134 58.37C239.134 58.6127 239.212 58.8163 239.368 58.981C239.533 59.137 239.732 59.267 239.966 59.371C240.209 59.4663 240.547 59.579 240.98 59.709C241.569 59.8823 242.05 60.0557 242.423 60.229C242.796 60.4023 243.116 60.6623 243.385 61.009C243.654 61.3557 243.788 61.8107 243.788 62.374C243.788 62.8593 243.662 63.31 243.411 63.726C243.16 64.142 242.791 64.4757 242.306 64.727C241.821 64.9697 241.244 65.091 240.577 65.091ZM247.186 58.838C247.42 58.5087 247.74 58.2357 248.148 58.019C248.564 57.7937 249.036 57.681 249.565 57.681C250.18 57.681 250.735 57.8327 251.229 58.136C251.731 58.4393 252.126 58.8727 252.412 59.436C252.706 59.9907 252.854 60.6363 252.854 61.373C252.854 62.1097 252.706 62.764 252.412 63.336C252.126 63.8993 251.731 64.337 251.229 64.649C250.735 64.961 250.18 65.117 249.565 65.117C249.036 65.117 248.568 65.0087 248.161 64.792C247.762 64.5753 247.437 64.3023 247.186 63.973V68.432H245.366V57.798H247.186V58.838ZM250.995 61.373C250.995 60.9397 250.904 60.567 250.722 60.255C250.548 59.9343 250.314 59.6917 250.02 59.527C249.734 59.3623 249.422 59.28 249.084 59.28C248.754 59.28 248.442 59.3667 248.148 59.54C247.862 59.7047 247.628 59.9473 247.446 60.268C247.272 60.5887 247.186 60.9657 247.186 61.399C247.186 61.8323 247.272 62.2093 247.446 62.53C247.628 62.8507 247.862 63.0977 248.148 63.271C248.442 63.4357 248.754 63.518 249.084 63.518C249.422 63.518 249.734 63.4313 250.02 63.258C250.314 63.0847 250.548 62.8377 250.722 62.517C250.904 62.1963 250.995 61.815 250.995 61.373ZM253.708 61.373C253.708 60.645 253.851 59.9993 254.137 59.436C254.432 58.8727 254.826 58.4393 255.32 58.136C255.823 57.8327 256.382 57.681 256.997 57.681C257.535 57.681 258.003 57.7893 258.401 58.006C258.809 58.2227 259.134 58.4957 259.376 58.825V57.798H261.209V65H259.376V63.947C259.142 64.285 258.817 64.5667 258.401 64.792C257.994 65.0087 257.522 65.117 256.984 65.117C256.378 65.117 255.823 64.961 255.32 64.649C254.826 64.337 254.432 63.8993 254.137 63.336C253.851 62.764 253.708 62.1097 253.708 61.373ZM259.376 61.399C259.376 60.957 259.29 60.58 259.116 60.268C258.943 59.9473 258.709 59.7047 258.414 59.54C258.12 59.3667 257.803 59.28 257.465 59.28C257.127 59.28 256.815 59.3623 256.529 59.527C256.243 59.6917 256.009 59.9343 255.827 60.255C255.654 60.567 255.567 60.9397 255.567 61.373C255.567 61.8063 255.654 62.1877 255.827 62.517C256.009 62.8377 256.243 63.0847 256.529 63.258C256.824 63.4313 257.136 63.518 257.465 63.518C257.803 63.518 258.12 63.4357 258.414 63.271C258.709 63.0977 258.943 62.855 259.116 62.543C259.29 62.2223 259.376 61.841 259.376 61.399ZM264.807 58.916C265.041 58.5347 265.344 58.2357 265.717 58.019C266.098 57.8023 266.532 57.694 267.017 57.694V59.605H266.536C265.964 59.605 265.531 59.7393 265.236 60.008C264.95 60.2767 264.807 60.7447 264.807 61.412V65H262.987V57.798H264.807V58.916ZM274.938 61.243C274.938 61.503 274.92 61.737 274.886 61.945H269.621C269.664 62.465 269.846 62.8723 270.167 63.167C270.487 63.4617 270.882 63.609 271.35 63.609C272.026 63.609 272.507 63.3187 272.793 62.738H274.756C274.548 63.4313 274.149 64.0033 273.56 64.454C272.97 64.896 272.247 65.117 271.389 65.117C270.695 65.117 270.071 64.9653 269.517 64.662C268.971 64.35 268.542 63.9123 268.23 63.349C267.926 62.7857 267.775 62.1357 267.775 61.399C267.775 60.6537 267.926 59.9993 268.23 59.436C268.533 58.8727 268.958 58.4393 269.504 58.136C270.05 57.8327 270.678 57.681 271.389 57.681C272.073 57.681 272.684 57.8283 273.222 58.123C273.768 58.4177 274.188 58.838 274.483 59.384C274.786 59.9213 274.938 60.541 274.938 61.243ZM273.053 60.723C273.044 60.255 272.875 59.8823 272.546 59.605C272.216 59.319 271.813 59.176 271.337 59.176C270.886 59.176 270.505 59.3147 270.193 59.592C269.889 59.8607 269.703 60.2377 269.634 60.723H273.053ZM285.981 58.734C285.981 59.2193 285.864 59.6743 285.63 60.099C285.404 60.5237 285.045 60.866 284.551 61.126C284.065 61.386 283.45 61.516 282.705 61.516H281.184V65H279.364V55.926H282.705C283.407 55.926 284.005 56.0473 284.499 56.29C284.993 56.5327 285.361 56.8663 285.604 57.291C285.855 57.7157 285.981 58.1967 285.981 58.734ZM282.627 60.047C283.129 60.047 283.502 59.9343 283.745 59.709C283.987 59.475 284.109 59.15 284.109 58.734C284.109 57.85 283.615 57.408 282.627 57.408H281.184V60.047H282.627ZM286.805 61.373C286.805 60.645 286.948 59.9993 287.234 59.436C287.529 58.8727 287.923 58.4393 288.417 58.136C288.92 57.8327 289.479 57.681 290.094 57.681C290.631 57.681 291.099 57.7893 291.498 58.006C291.905 58.2227 292.23 58.4957 292.473 58.825V57.798H294.306V65H292.473V63.947C292.239 64.285 291.914 64.5667 291.498 64.792C291.091 65.0087 290.618 65.117 290.081 65.117C289.474 65.117 288.92 64.961 288.417 64.649C287.923 64.337 287.529 63.8993 287.234 63.336C286.948 62.764 286.805 62.1097 286.805 61.373ZM292.473 61.399C292.473 60.957 292.386 60.58 292.213 60.268C292.04 59.9473 291.806 59.7047 291.511 59.54C291.216 59.3667 290.9 59.28 290.562 59.28C290.224 59.28 289.912 59.3623 289.626 59.527C289.34 59.6917 289.106 59.9343 288.924 60.255C288.751 60.567 288.664 60.9397 288.664 61.373C288.664 61.8063 288.751 62.1877 288.924 62.517C289.106 62.8377 289.34 63.0847 289.626 63.258C289.921 63.4313 290.233 63.518 290.562 63.518C290.9 63.518 291.216 63.4357 291.511 63.271C291.806 63.0977 292.04 62.855 292.213 62.543C292.386 62.2223 292.473 61.841 292.473 61.399ZM297.904 58.916C298.138 58.5347 298.441 58.2357 298.814 58.019C299.195 57.8023 299.628 57.694 300.114 57.694V59.605H299.633C299.061 59.605 298.627 59.7393 298.333 60.008C298.047 60.2767 297.904 60.7447 297.904 61.412V65H296.084V57.798H297.904V58.916ZM303.458 59.293V62.777C303.458 63.0197 303.515 63.1973 303.627 63.31C303.749 63.414 303.948 63.466 304.225 63.466H305.07V65H303.926C302.392 65 301.625 64.2547 301.625 62.764V59.293H300.767V57.798H301.625V56.017H303.458V57.798H305.07V59.293H303.458ZM309.135 65.117C308.546 65.117 308.017 65.013 307.549 64.805C307.081 64.5883 306.709 64.298 306.431 63.934C306.163 63.57 306.015 63.167 305.989 62.725H307.822C307.857 63.0023 307.991 63.232 308.225 63.414C308.468 63.596 308.767 63.687 309.122 63.687C309.469 63.687 309.738 63.6177 309.928 63.479C310.128 63.3403 310.227 63.1627 310.227 62.946C310.227 62.712 310.106 62.5387 309.863 62.426C309.629 62.3047 309.252 62.1747 308.732 62.036C308.195 61.906 307.753 61.7717 307.406 61.633C307.068 61.4943 306.774 61.282 306.522 60.996C306.28 60.71 306.158 60.3243 306.158 59.839C306.158 59.4403 306.271 59.0763 306.496 58.747C306.73 58.4177 307.06 58.1577 307.484 57.967C307.918 57.7763 308.425 57.681 309.005 57.681C309.863 57.681 310.548 57.8977 311.059 58.331C311.571 58.7557 311.852 59.332 311.904 60.06H310.162C310.136 59.774 310.015 59.5487 309.798 59.384C309.59 59.2107 309.309 59.124 308.953 59.124C308.624 59.124 308.368 59.1847 308.186 59.306C308.013 59.4273 307.926 59.5963 307.926 59.813C307.926 60.0557 308.048 60.242 308.29 60.372C308.533 60.4933 308.91 60.619 309.421 60.749C309.941 60.879 310.37 61.0133 310.708 61.152C311.046 61.2907 311.337 61.5073 311.579 61.802C311.831 62.088 311.961 62.4693 311.969 62.946C311.969 63.362 311.852 63.7347 311.618 64.064C311.393 64.3933 311.064 64.6533 310.63 64.844C310.206 65.026 309.707 65.117 309.135 65.117ZM130.072 75.926V77.395H127.654V85H125.834V77.395H123.416V75.926H130.072ZM133.22 78.916C133.454 78.5347 133.757 78.2357 134.13 78.019C134.511 77.8023 134.945 77.694 135.43 77.694V79.605H134.949C134.377 79.605 133.944 79.7393 133.649 80.008C133.363 80.2767 133.22 80.7447 133.22 81.412V85H131.4V77.798H133.22V78.916ZM136.188 81.373C136.188 80.645 136.331 79.9993 136.617 79.436C136.911 78.8727 137.306 78.4393 137.8 78.136C138.302 77.8327 138.861 77.681 139.477 77.681C140.014 77.681 140.482 77.7893 140.881 78.006C141.288 78.2227 141.613 78.4957 141.856 78.825V77.798H143.689V85H141.856V83.947C141.622 84.285 141.297 84.5667 140.881 84.792C140.473 85.0087 140.001 85.117 139.464 85.117C138.857 85.117 138.302 84.961 137.8 84.649C137.306 84.337 136.911 83.8993 136.617 83.336C136.331 82.764 136.188 82.1097 136.188 81.373ZM141.856 81.399C141.856 80.957 141.769 80.58 141.596 80.268C141.422 79.9473 141.188 79.7047 140.894 79.54C140.599 79.3667 140.283 79.28 139.945 79.28C139.607 79.28 139.295 79.3623 139.009 79.527C138.723 79.6917 138.489 79.9343 138.307 80.255C138.133 80.567 138.047 80.9397 138.047 81.373C138.047 81.8063 138.133 82.1877 138.307 82.517C138.489 82.8377 138.723 83.0847 139.009 83.258C139.303 83.4313 139.615 83.518 139.945 83.518C140.283 83.518 140.599 83.4357 140.894 83.271C141.188 83.0977 141.422 82.855 141.596 82.543C141.769 82.2223 141.856 81.841 141.856 81.399ZM144.998 81.373C144.998 80.645 145.141 79.9993 145.427 79.436C145.722 78.8727 146.121 78.4393 146.623 78.136C147.126 77.8327 147.685 77.681 148.3 77.681C148.768 77.681 149.215 77.785 149.639 77.993C150.064 78.1923 150.402 78.461 150.653 78.799V75.38H152.499V85H150.653V83.934C150.428 84.2893 150.112 84.5753 149.704 84.792C149.297 85.0087 148.825 85.117 148.287 85.117C147.681 85.117 147.126 84.961 146.623 84.649C146.121 84.337 145.722 83.8993 145.427 83.336C145.141 82.764 144.998 82.1097 144.998 81.373ZM150.666 81.399C150.666 80.957 150.58 80.58 150.406 80.268C150.233 79.9473 149.999 79.7047 149.704 79.54C149.41 79.3667 149.093 79.28 148.755 79.28C148.417 79.28 148.105 79.3623 147.819 79.527C147.533 79.6917 147.299 79.9343 147.117 80.255C146.944 80.567 146.857 80.9397 146.857 81.373C146.857 81.8063 146.944 82.1877 147.117 82.517C147.299 82.8377 147.533 83.0847 147.819 83.258C148.114 83.4313 148.426 83.518 148.755 83.518C149.093 83.518 149.41 83.4357 149.704 83.271C149.999 83.0977 150.233 82.855 150.406 82.543C150.58 82.2223 150.666 81.841 150.666 81.399ZM155.2 76.94C154.879 76.94 154.611 76.8403 154.394 76.641C154.186 76.433 154.082 76.1773 154.082 75.874C154.082 75.5707 154.186 75.3193 154.394 75.12C154.611 74.912 154.879 74.808 155.2 74.808C155.521 74.808 155.785 74.912 155.993 75.12C156.21 75.3193 156.318 75.5707 156.318 75.874C156.318 76.1773 156.21 76.433 155.993 76.641C155.785 76.8403 155.521 76.94 155.2 76.94ZM156.097 77.798V85H154.277V77.798H156.097ZM161.886 77.694C162.744 77.694 163.437 77.967 163.966 78.513C164.495 79.0503 164.759 79.8043 164.759 80.775V85H162.939V81.022C162.939 80.45 162.796 80.0123 162.51 79.709C162.224 79.397 161.834 79.241 161.34 79.241C160.837 79.241 160.439 79.397 160.144 79.709C159.858 80.0123 159.715 80.45 159.715 81.022V85H157.895V77.798H159.715V78.695C159.958 78.383 160.265 78.1403 160.638 77.967C161.019 77.785 161.435 77.694 161.886 77.694ZM169.311 77.681C169.848 77.681 170.32 77.7893 170.728 78.006C171.135 78.214 171.456 78.487 171.69 78.825V77.798H173.523V85.052C173.523 85.7193 173.388 86.313 173.12 86.833C172.851 87.3617 172.448 87.7777 171.911 88.081C171.373 88.393 170.723 88.549 169.961 88.549C168.938 88.549 168.097 88.3107 167.439 87.834C166.789 87.3573 166.42 86.7073 166.334 85.884H168.141C168.236 86.2133 168.44 86.4733 168.752 86.664C169.072 86.8633 169.458 86.963 169.909 86.963C170.437 86.963 170.866 86.8027 171.196 86.482C171.525 86.17 171.69 85.6933 171.69 85.052V83.934C171.456 84.272 171.131 84.5537 170.715 84.779C170.307 85.0043 169.839 85.117 169.311 85.117C168.704 85.117 168.149 84.961 167.647 84.649C167.144 84.337 166.745 83.8993 166.451 83.336C166.165 82.764 166.022 82.1097 166.022 81.373C166.022 80.645 166.165 79.9993 166.451 79.436C166.745 78.8727 167.14 78.4393 167.634 78.136C168.136 77.8327 168.695 77.681 169.311 77.681ZM171.69 81.399C171.69 80.957 171.603 80.58 171.43 80.268C171.256 79.9473 171.022 79.7047 170.728 79.54C170.433 79.3667 170.117 79.28 169.779 79.28C169.441 79.28 169.129 79.3623 168.843 79.527C168.557 79.6917 168.323 79.9343 168.141 80.255C167.967 80.567 167.881 80.9397 167.881 81.373C167.881 81.8063 167.967 82.1877 168.141 82.517C168.323 82.8377 168.557 83.0847 168.843 83.258C169.137 83.4313 169.449 83.518 169.779 83.518C170.117 83.518 170.433 83.4357 170.728 83.271C171.022 83.0977 171.256 82.855 171.43 82.543C171.603 82.2223 171.69 81.841 171.69 81.399ZM184.001 75.926V77.395H180.218V79.722H183.117V81.165H180.218V85H178.398V75.926H184.001ZM187.151 83.466H191.233V85H185.045V83.596L189.101 77.46H185.045V75.926H191.233V77.33L187.151 83.466ZM198.32 79.592V81.126H192.808V79.592H198.32ZM202.181 83.557H205.171V85H200.361V75.926H202.181V83.557ZM208.148 83.557H211.138V85H206.328V75.926H208.148V83.557ZM211.852 80.45C211.852 79.5573 212.052 78.76 212.45 78.058C212.858 77.3473 213.408 76.797 214.101 76.407C214.803 76.0083 215.588 75.809 216.454 75.809C217.468 75.809 218.357 76.069 219.119 76.589C219.882 77.109 220.415 77.8283 220.718 78.747H218.625C218.417 78.3137 218.123 77.9887 217.741 77.772C217.369 77.5553 216.935 77.447 216.441 77.447C215.913 77.447 215.44 77.5727 215.024 77.824C214.617 78.0667 214.296 78.4133 214.062 78.864C213.837 79.3147 213.724 79.8433 213.724 80.45C213.724 81.048 213.837 81.5767 214.062 82.036C214.296 82.4867 214.617 82.8377 215.024 83.089C215.44 83.3317 215.913 83.453 216.441 83.453C216.935 83.453 217.369 83.3447 217.741 83.128C218.123 82.9027 218.417 82.5733 218.625 82.14H220.718C220.415 83.0673 219.882 83.791 219.119 84.311C218.365 84.8223 217.477 85.078 216.454 85.078C215.588 85.078 214.803 84.883 214.101 84.493C213.408 84.0943 212.858 83.544 212.45 82.842C212.052 82.14 211.852 81.3427 211.852 80.45Z" fill="white" />
            <path d="M126.1 5.2H147C148.2 5.33333 148.8 5.63333 148.8 6.1V9.15C148.8 9.88333 143.25 18.25 132.15 34.25V34.55H139.75C145.05 34.55 148.067 36.0667 148.8 39.1V39.4C148.8 39.8 148.6 40 148.2 40H124.9C124.3 39.8 124 39.2 124 38.2V36.65C124 35.75 129.45 27.5833 140.35 12.15L140.95 11.25V10.95H135.2C129.133 10.95 126.1 10.25 126.1 8.85C125.833 8.85 125.233 8.23333 124.3 7V6.1C124.5 5.5 125.1 5.2 126.1 5.2ZM159.932 5.4H179.182C180.382 5.53333 180.982 5.83333 180.982 6.3V6.9C180.982 9.7 178.082 11.1 172.282 11.1H164.132V19.85H179.482C179.782 19.85 180.082 20.15 180.382 20.75V24.35C180.382 24.65 180.082 24.95 179.482 25.25H164.132V34.6H171.982C177.982 34.6 180.982 36 180.982 38.8V39.4C180.982 39.8 180.782 40 180.382 40H158.732C158.132 39.8 157.832 39.2 157.832 38.2V7.5C157.832 6.1 158.532 5.4 159.932 5.4ZM191.65 5.4H192.55C195.317 6.8 196.7 11.0833 196.7 18.25C196.9 18.25 197 20.3333 197 24.5V31.35C197 33.55 199.583 34.65 204.75 34.65C209.55 34.65 211.95 33.35 211.95 30.75V20.9C211.95 11.3667 212.833 6.6 214.6 6.6C214.933 5.8 215.633 5.4 216.7 5.4H217.3C217.7 5.46666 217.9 5.66666 217.9 6V31.05C217.9 37.0167 213.417 40 204.45 40C198.517 40 194.55 38.8 192.55 36.4C191.35 35.1 190.75 32.4167 190.75 28.35V7.2C190.883 6 191.183 5.4 191.65 5.4ZM240.185 5.2C246.451 5.2 250.485 6.58333 252.285 9.35V10.2C252.285 10.6 251.985 10.8 251.385 10.8C248.551 10.8 244.235 10.7 238.435 10.5C234.701 10.5 232.835 11.5833 232.835 13.75V16.7C232.835 18.3333 235.001 19.3167 239.335 19.65C243.935 19.65 248.051 20.8333 251.685 23.2C252.885 24.8333 253.485 26.6 253.485 28.5V30.85C253.485 34.9833 251.718 37.7333 248.185 39.1C245.385 39.7 242.535 40 239.635 40C233.801 40 229.951 38.7167 228.085 36.15V35.3C228.151 34.9 228.351 34.7 228.685 34.7H241.685C245.618 34.7 247.585 33.3167 247.585 30.55V29.1C247.585 26.7667 244.435 25.3833 238.135 24.95C230.468 24.95 226.635 21.8 226.635 15.5C226.635 10.9 228.101 7.95 231.035 6.65C234.035 5.68333 237.085 5.2 240.185 5.2Z" fill="white" />
            <path d="M82.1774 56.403C82.1774 55.619 81.5692 54.9837 80.8232 54.9837H75.3453C75.8502 54.7425 76.4087 54.4249 77.059 53.9223C78.528 52.8046 79.7368 51.6628 80.7085 50.6536C80.7659 50.6134 81.0681 50.3963 81.0987 50.0103C81.1254 49.7611 81.026 49.5037 80.8156 49.3067L80.8079 49.2786C80.3145 48.7961 79.492 48.764 78.9488 49.1741C77.8471 50.1832 76.6038 51.2326 75.1922 52.306C73.8457 53.3112 72.5221 54.2078 71.2674 54.9837H69.4388C71.3707 53.5283 73.3752 51.9201 75.395 50.1309C77.0093 48.7117 78.4936 47.3246 79.8439 45.9576C80.3145 45.5033 80.2953 44.8078 79.8248 44.3414L79.8095 44.3253C79.1783 43.7303 78.0995 43.7906 77.5296 44.4097C76.2978 45.7606 74.8594 47.204 73.1801 48.6594C70.334 51.0918 66.3976 53.4439 63.7122 54.9717L64.4926 54.2922C64.4926 54.2922 69.1404 50.0184 71.1526 46.3637C73.0424 42.9744 73.9375 39.8344 74.3812 37.406C74.5343 36.5657 73.926 35.7978 72.9697 35.5686C72.109 35.3796 71.2329 35.8782 71.0952 36.6501C70.6974 39.1469 69.8214 42.3955 67.9087 45.9576C66.8835 47.8674 65.732 49.5359 64.5729 50.9712C64.1177 51.5341 60.977 55.3536 61.1721 54.6621C61.7651 52.5111 64.4926 45.837 64.8254 43.2317C65.4336 38.5157 65.2768 34.3544 64.8828 30.9933C64.7986 30.362 64.2324 29.8313 63.4788 29.7429C62.5225 29.6062 61.6924 30.2776 61.7918 31.0938C62.1897 34.4509 62.3427 38.58 61.7498 43.2317C61.1415 48.0041 60.2311 51.8356 59.0146 54.9837H58.1883C59.0146 51.9442 59.8179 46.9467 58.4216 41.1933C57.1325 35.8661 54.5121 31.9381 52.6223 29.6223C52.2895 29.2001 51.731 28.9709 51.1687 29.0393L50.79 29.0634C49.5964 29.1921 48.9614 30.3902 49.6385 31.2506C51.5168 33.6669 53.7891 37.3216 54.9673 42.1301C56.2909 47.5256 55.6788 52.1171 54.975 54.9837H53.9383C54.2022 52.0568 54.1142 46.9386 51.5015 41.5994C49.0341 36.5416 45.3999 33.2769 43.12 31.5601C42.8293 31.335 42.4467 31.2385 42.068 31.2908L41.9188 31.3028C40.8171 31.4275 40.3619 32.6015 41.1346 33.289C43.4796 35.3796 46.5055 38.6885 48.5177 43.3684C49.7762 46.2672 50.3347 48.969 50.5451 51.2808C49.4587 49.0374 47.9324 46.5004 45.7978 43.9112C41.8461 39.1348 37.4202 36.1114 34.4249 34.3705C33.7019 34.2177 32.9559 34.4589 32.516 34.9495C31.9154 35.6209 32.2176 36.3928 32.2482 36.4612C35.1479 38.2101 39.2372 41.125 42.9173 45.5958C45.7595 49.0454 47.4695 52.3824 48.533 54.9837H47.8673C46.8766 52.9614 45.2469 50.344 42.5385 47.783C38.4071 43.867 33.7898 41.9653 31.1121 41.1169C30.0027 40.349 28.5184 40.6787 28.0326 41.3742C27.6577 41.9653 27.8834 42.898 28.7365 43.4488C31.1235 44.1363 35.408 45.6762 39.2257 49.1861C41.4751 51.2326 43.055 53.3031 43.9807 54.9837H41.2953C39.9181 54.0711 39.5433 53.2549 38.2388 52.684C37.7606 52.4709 37.2977 52.3583 36.8922 52.298C36.5594 52.2538 36.3299 51.9723 36.3299 51.6507V47.7548H35.3506C35.2588 47.9438 35.1364 48.1327 35.0101 48.3659C34.62 48.9972 34.0767 49.7249 33.3958 50.4647C32.4701 51.4537 31.529 52.3664 30.7639 52.8247H3.84453C1.72143 52.8247 0 54.5012 0 56.5638V56.7005C0 58.7308 1.70231 60.3833 3.79481 60.3752L11.35 60.3632H11.6904L18.8287 60.3511H18.8899L30.5459 60.331H30.6262V60.3591C31.3798 60.6929 32.4701 61.3201 33.5259 62.3694C34.333 63.1896 34.8686 64.0419 35.2129 64.7295C35.3812 65.0632 35.5113 65.3647 35.6069 65.5899H36.3299V61.304C36.3299 60.9582 36.5824 60.6486 36.9381 60.6084C37.6879 60.528 38.2311 60.3149 38.6022 60.142C39.6351 59.6515 40.1438 58.5539 41.498 57.6935C41.5401 57.6654 41.5822 57.6413 41.6281 57.6212H44.1835C43.2845 59.2897 41.8653 61.3723 39.6427 63.4308C35.8288 66.9287 31.5443 68.4806 29.1573 69.1681C28.2927 69.7069 28.0709 70.6396 28.4457 71.2306C28.9316 71.9342 30.4158 72.272 31.529 71.488C34.1992 70.6396 38.8202 68.746 42.9517 64.8219C45.6754 62.2568 47.3088 59.6355 48.2881 57.6212H48.9538C47.9018 60.2024 46.1803 63.5474 43.3266 67.0091C39.6504 71.4799 35.561 74.4028 32.6652 76.1598C32.6384 76.196 32.3324 76.9961 32.9253 77.6675C33.369 78.1459 34.1226 78.3872 34.8456 78.2344C37.8333 76.5056 42.2631 73.4862 46.2148 68.6937C48.3532 66.1206 49.8795 63.5675 50.9583 61.3402C50.7479 63.6359 50.197 66.3296 48.9308 69.2525C46.9186 73.9164 43.9004 77.2252 41.5554 79.3159C40.7789 80.0034 41.2379 81.1814 42.3281 81.3141L42.4812 81.3222C42.8561 81.3825 43.2501 81.2538 43.537 81.0608C45.8093 79.332 49.4434 76.0754 51.9146 71.0176C54.6192 65.5014 54.6498 60.4878 54.3667 57.6212H55.2772C55.981 60.4958 56.6964 65.0712 55.3805 70.4748C54.2022 75.2833 51.9261 78.9541 50.0593 81.3543C49.3784 82.2308 50.0172 83.4289 51.2107 83.5415L51.5665 83.5817C52.1518 83.6179 52.7103 83.4128 53.0355 82.9987C54.9252 80.6668 57.5456 76.7468 58.831 71.4116C60.2425 65.5778 59.1599 60.6325 58.3031 57.6212H59.1791C60.4109 60.7612 61.5776 64.7375 62.1629 69.3732C62.7635 74.0249 62.6105 78.154 62.205 81.5111C62.1132 82.3353 62.9433 83.0148 63.8996 82.862C64.6456 82.7736 65.2156 82.2589 65.2959 81.5956C65.6861 78.2666 65.8544 74.0933 65.2462 69.3732C64.9057 66.7598 62.2203 59.9732 61.6273 57.8222C61.4322 57.1307 64.5308 61.0708 64.986 61.6377C66.149 63.069 67.3004 64.7455 68.3218 66.6553C70.2345 70.2054 71.1105 73.4741 71.516 75.9548C71.6537 76.7267 72.5259 77.2252 73.3828 77.0363C74.343 76.8071 74.9512 76.0392 74.802 75.2029C74.3583 72.7866 73.4555 69.6305 71.5658 66.2412C69.6837 62.8278 66.149 59.5912 64.0297 57.6212H65.0281C65.1505 57.6815 65.2806 57.7337 65.4068 57.7941C67.9813 59.3018 70.7318 61.509 73.5932 63.9615C75.2726 65.4009 76.7109 66.8442 77.9504 68.1951C78.5127 68.8304 79.5991 68.8746 80.2227 68.2796L80.238 68.2635C80.7085 67.8052 80.7353 67.1016 80.2647 66.6553C78.9029 65.2964 77.4224 63.8932 75.8158 62.49C73.773 60.6768 71.7608 59.0766 69.8137 57.6212H71.2521C72.6063 58.3891 74.2665 59.3018 75.6054 60.3149C77.017 61.3723 78.2679 62.4378 79.3619 63.4469C79.9052 63.857 80.7353 63.8088 81.2211 63.3424L81.2517 63.2982C81.4468 63.1092 81.5386 62.8519 81.5118 62.6106C81.4812 62.2006 81.179 62.0076 81.1255 61.9513C80.15 60.9341 78.9488 59.8164 77.4798 58.6987C76.8142 58.184 76.2481 57.8624 75.7278 57.6212H81.0107C81.6534 57.6212 82.1774 57.0744 82.1774 56.403ZM44.3709 55.7556C44.3786 55.816 44.4207 55.7114 44.3709 55.7556V55.7556Z" fill="white" />
            <path d="M33.4571 27.9019C29.8268 30.4871 26.3342 33.5226 23.905 37.2898C23.8171 37.4145 23.7291 37.5431 23.6449 37.6718L17.7232 33.4382L17.7079 33.4261C17.9527 33.0522 18.2014 32.6903 18.4538 32.3285L15.3667 27.1742C14.4831 25.7027 14.6667 23.7889 15.8028 22.5305L18.5265 19.5272C19.5747 18.3733 21.2502 18.1521 22.5355 18.9884L28.1857 22.6712C28.5032 22.446 28.8207 22.2249 29.1459 22.0038L33.4571 27.9019Z" fill="white" stroke="white" stroke-miterlimit="10" />
            <path d="M104.999 52.6403V56.5443C104.999 58.0721 103.947 59.4109 102.444 59.7969L96.0059 61.4493L95.6004 61.5538C95.6004 61.5538 95.6004 61.5538 95.6004 61.5579C95.413 63.0213 95.1376 64.4607 94.8009 65.8719C94.7933 65.896 94.7894 65.9161 94.7818 65.9402C94.667 66.4187 94.5484 66.8931 94.4184 67.3675C94.2768 67.8781 94.1238 68.3887 93.9632 68.8953C93.8981 69.0963 93.8331 69.3014 93.7642 69.4984C93.7451 69.5627 93.726 69.623 93.703 69.6874C93.615 69.9366 93.5271 70.1819 93.4391 70.4271C93.3587 70.6442 93.2784 70.8614 93.1981 71.0785C93.0336 71.5087 92.8614 71.9348 92.6778 72.361C91.2395 75.7583 89.3612 78.9265 87.1042 81.7931C87.1042 81.7972 87.1042 81.7972 87.1042 81.7972L87.1195 81.8213L87.3873 82.2233L91.6909 88.7085C92.433 89.8181 92.2953 91.2856 91.3619 92.2505L88.4928 95.2137C87.5135 96.2268 85.9642 96.46 84.7171 95.7805L77.1467 91.6273L76.6493 91.354H76.6455L76.6073 91.3338C76.6073 91.3338 76.6073 91.3338 76.6034 91.3338C71.8217 94.4136 66.3858 96.5444 60.5329 97.5013L60.5291 97.5174L60.4028 98.0441L58.5972 105.647C58.2989 106.881 57.1818 107.758 55.8927 107.758H51.3749C50.1048 107.758 48.9916 106.909 48.6703 105.699L46.6046 97.9114L46.5013 97.5174C46.5013 97.5134 46.5013 97.5134 46.5013 97.5134C42.1594 96.8098 38.9844 95.9012 35.1972 93.9995L38.5942 87.8078C44.0224 90.3126 50.0742 91.7721 56.5659 91.2333C57.7556 91.1328 58.9301 90.976 60.0892 90.7589C60.1121 90.7549 60.1351 90.7509 60.158 90.7468C60.2804 90.7267 60.4067 90.7026 60.5291 90.6785C60.5673 90.6705 60.6056 90.6624 60.6438 90.6544C60.663 90.6504 60.6821 90.6463 60.7012 90.6423C60.7203 90.6383 60.7356 90.6343 60.7548 90.6303C70.0582 88.813 78.0456 83.337 83.1411 75.7664C83.1449 75.7583 83.1487 75.7543 83.1525 75.7463C83.2214 75.6498 83.2864 75.5533 83.3476 75.4608C83.3782 75.4126 83.4089 75.3684 83.4356 75.3201C83.5274 75.1874 83.6116 75.0507 83.6996 74.9181C87.1616 69.5386 89.1623 63.154 89.1623 56.3071C89.1623 49.3315 87.0812 42.8343 83.5045 37.3905C83.4968 37.3784 83.493 37.3704 83.4854 37.3624C78.3899 29.5063 70.2188 23.8052 60.663 21.9638C60.4602 21.9236 60.2536 21.8834 60.0509 21.8472C60.0356 21.8432 60.0203 21.8432 60.005 21.8391C59.9973 21.8391 59.9935 21.8351 59.9859 21.8351C57.8819 21.4532 55.7091 21.2521 53.4903 21.2521C47.2702 21.2521 41.4671 23.2021 36.3831 25.9843L32.1904 19.9615C32.2057 19.9495 32.2172 19.9414 32.2325 19.9374C34.413 18.675 36.6738 17.6739 39.0379 16.8858C41.4212 16.0898 43.9077 15.5108 46.5166 15.0847L46.639 14.6263L48.5785 7.2567C48.9534 5.84549 50.2502 4.85645 51.7345 4.85645H55.7358C57.1168 4.85645 58.3142 5.79323 58.6317 7.12L60.3914 14.4977L60.5329 15.0967C63.6047 15.5993 66.5617 16.4275 69.3696 17.5452C72.1774 18.6629 74.8399 20.0701 77.3035 21.7225H77.3073L77.885 21.4049L84.6751 17.6859C85.9451 16.9864 87.5326 17.2236 88.5311 18.2609L91.5799 21.4089C92.3833 22.2412 92.5019 23.5076 91.863 24.4685L87.7048 30.7325L87.4064 31.1828C89.2847 33.6394 90.8952 36.305 92.192 39.1435C93.4888 41.9819 94.4758 44.9853 95.1031 48.1173L95.5545 48.2218L102.781 49.8863C104.081 50.1838 104.999 51.3256 104.999 52.6403Z" fill="white" stroke="white" stroke-miterlimit="10" />
            <path d="M35.958 86.4847L32.1135 92.5356C31.9681 92.4512 31.8228 92.3627 31.6774 92.2702C31.6277 92.2381 31.5741 92.2059 31.5244 92.1778C31.3293 92.0531 31.138 91.9325 30.9429 91.8119L25.4955 95.7158C24.2331 96.6044 22.5538 96.4355 21.4712 95.3178L18.6557 92.411C17.4736 91.1927 17.2326 89.287 18.0666 87.7874L20.863 82.7657L20.9968 82.5285C20.7252 82.1787 20.3733 81.8893 20.1208 81.5274L25.6256 77.0928C25.6371 77.1048 25.6447 77.1169 25.6562 77.133C28.2116 80.9726 32.1364 83.9518 35.958 86.4847Z" fill="white" stroke="white" stroke-miterlimit="10" />
        </svg>

    )
}
