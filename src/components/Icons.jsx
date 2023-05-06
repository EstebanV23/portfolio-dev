import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, rotate: 180 },
  show: { opacity: 1, rotate: 360 }
}

export function Sun () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 96 960 960'
    >
      <path d='M450 246V136h60v110h-60zm0 770V906h60v110h-60zm360-410v-60h110v60H810zm-770 0v-60h110v60H40zm702-250l-43-43 66-66 43 43-66 66zM195 905l-43-43 66-66 43 43-66 66zm570 0l-66-66 43-43 66 66-43 43zM218 356l-66-66 43-43 66 66-43 43zm261.824 445Q386 801 320.5 735.324 255 669.647 255 575.823 255 482 320.676 416.5q65.677-65.5 159.5-65.5Q574 351 639.5 416.677q65.5 65.676 65.5 159.5Q705 670 639.323 735.5 573.647 801 479.824 801zm.11-60Q549 741 597 693.066t48-117Q645 507 597.066 459t-117-48Q411 411 363 458.934t-48 117Q315 645 362.934 693t117 48zM480 576z' />
    </motion.svg>
  )
}

export function Nigth () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 96 960 960'
    >
      <path d='M524 1016q-84 0-157.5-32t-128-86.5Q184 843 152 769.5T120 612q0-146 93-257.5T450 216q-18 98 11 192.635 29 94.635 100 165.736 71 71.101 165.5 100.143Q821 703.555 920 685.529q-26 144.206-138 237.338Q670 1016 524 1016zm0-60q100 0 182-57t132-145q-90-8-173-41.5T518.5 616Q455 553 422 470.5T381 299q-88 48-144.5 130.5T180 612q0 143.333 100.333 243.667Q380.667 956 524 956zm-6-340z' />
    </motion.svg>
  )
}

export function WebIcon () {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      viewBox='0 0 16 16'
    >
      <path
        fillRule='evenodd'
        d='M16 8a8.001 8.001 0 01-7.022 7.94l1.902-7.098a2.995 2.995 0 00.05-1.492A2.977 2.977 0 0010.237 6h5.511A8 8 0 0116 8zM0 8a8 8 0 007.927 8l1.426-5.321a2.978 2.978 0 01-.723.255 2.979 2.979 0 01-1.743-.147 2.986 2.986 0 01-1.043-.7L.633 4.876A7.975 7.975 0 000 8zm5.004-.167L1.108 3.936A8.003 8.003 0 0115.418 5H8.066a2.979 2.979 0 00-1.252.243 2.987 2.987 0 00-1.81 2.59zM8 10a2 2 0 100-4 2 2 0 000 4z'
      />
    </motion.svg>
  )
}

export function Arrow () {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      viewBox='0 75 750 750'
    >
      <path d='m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z' />
    </motion.svg>
  )
}

export function GitHubIcon () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      viewBox='0 0 16 16'
    >
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z' />
    </motion.svg>
  )
}

export function ArrowNext ({ ...props }) {
  return (
    <motion.svg
      animate={{ x: [0, 6, 0] }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: 'reverse'
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 96 960 960'
      {...props}
    >
      <path d='M255 815l-42-42 198-198-198-198 42-42 240 240-240 240zm253 0l-42-42 198-198-198-198 42-42 240 240-240 240z' />
    </motion.svg>
  )
}

export function LinkedinIcon () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
    </motion.svg>
  )
}

export function GitHub () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
    >
      <linearGradient
        id='a'
        x1='4'
        x2='44'
        y1='23.508'
        y2='23.508'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#4c4c4c' />
        <stop offset='1' stopColor='#343434' />
      </linearGradient>
      <path
        fill='url(#a)'
        d='M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z'
      />
      <path
        d='M30.01 41.996L30 36.198c0-.939-.22-1.856-.642-2.687 5.641-1.133 8.386-4.468 8.386-10.177 0-2.255-.665-4.246-1.976-5.92.1-.317.174-.645.22-.981.188-1.369-.023-2.264-.193-2.984l-.027-.116c-.186-.796-.409-1.364-.418-1.388l-.111-.282-.111-.282-.302-.032-.303-.032s-.199-.021-.501-.021c-.419 0-1.04.042-1.627.241l-.196.066c-.74.249-1.439.485-2.417 1.069-.286.171-.599.366-.934.584A20.188 20.188 0 0024 12.69c-1.722 0-3.365.192-4.889.571-.339-.22-.654-.417-.942-.589-.978-.584-1.677-.819-2.417-1.069l-.196-.066c-.585-.199-1.207-.241-1.626-.241-.302 0-.501.021-.501.021l-.302.032-.3.031-.112.281-.113.283c-.01.026-.233.594-.419 1.391l-.027.115c-.17.719-.381 1.615-.193 2.983.048.346.125.685.23 1.011-1.285 1.666-1.936 3.646-1.936 5.89 0 5.695 2.748 9.028 8.397 10.17a6.005 6.005 0 00-.452 1.224 3.248 3.248 0 01-.538.137 4.963 4.963 0 01-.739.054c-.686 0-1.225-.134-1.435-.259-.313-.186-.872-.727-1.414-1.518-.463-.675-1.185-1.558-1.992-1.927-.698-.319-1.437-.502-2.029-.502-.138 0-.265.01-.376.028-.517.082-.949.366-1.184.78a1.313 1.313 0 00-.088 1.141c.219.548.851.985 1.343 1.255.242.133.765.619 1.07 1.109.229.368.335.63.482.992.087.215.183.449.313.732.47 1.022 1.937 1.924 2.103 2.023.806.483 2.161.638 3.157.683l.123.003h.001c.24 0 .57-.023 1.004-.071v2.613c.002.529-.537.649-1.25.638l.547.184A19.85 19.85 0 0024 44c2.355 0 4.605-.428 6.703-1.176l.703-.262c-.711-.024-1.39-.14-1.396-.566z'
        opacity='0.05'
      />
      <path
        d='M30.781 42.797c-.406.047-1.281-.109-1.281-.795v-5.804a5.445 5.445 0 00-.936-3.052c5.915-.957 8.679-4.093 8.679-9.812 0-2.237-.686-4.194-2.039-5.822.137-.365.233-.75.288-1.147.175-1.276-.016-2.086-.184-2.801l-.027-.116a10.279 10.279 0 00-.397-1.319l-.111-.282-.303-.032s-.178-.019-.449-.019c-.381 0-.944.037-1.466.215l-.196.066c-.714.241-1.389.468-2.321 1.024-.332.198-.702.431-1.101.694-1.533-.401-3.192-.605-4.937-.605-1.762 0-3.435.205-4.979.61a31.394 31.394 0 00-1.109-.699c-.932-.556-1.607-.784-2.321-1.024l-.196-.066c-.521-.177-1.085-.215-1.466-.215a4.68 4.68 0 00-.449.019l-.302.032-.113.283c-.009.022-.219.558-.397 1.319l-.027.116c-.169.715-.36 1.524-.184 2.8.056.407.156.801.298 1.174-1.327 1.62-1.999 3.567-1.999 5.795 0 5.703 2.766 8.838 8.686 9.806a5.445 5.445 0 00-.813 1.964 4.22 4.22 0 01-.891.256c-.263.04-.537.06-.814.06-.69 0-1.353-.129-1.69-.329-.44-.261-1.057-.914-1.572-1.665-.35-.51-1.047-1.417-1.788-1.755-.635-.29-1.298-.457-1.821-.457-.11 0-.21.008-.298.022-.366.058-.668.252-.828.534a.815.815 0 00-.059.708c.179.448.842.85 1.119 1.002.335.184.919.744 1.254 1.284.251.404.37.697.521 1.067.085.209.178.437.304.712.331.719 1.353 1.472 1.905 1.803.754.452 2.154.578 2.922.612l.111.002c.299 0 .8-.045 1.495-.135v3.177c0 .779-.991.81-1.234.81-.031 0 .503.184.503.184A19.946 19.946 0 0024 44c2.178 0 4.269-.36 6.231-1.003 0 0 .581-.204.55-.2z'
        opacity='0.07'
      />
      <path
        fill='#fff'
        d='M36.744 23.334c0-2.31-.782-4.226-2.117-5.728.145-.325.296-.761.371-1.309.172-1.25-.031-2-.203-2.734s-.375-1.25-.375-1.25-.922-.094-1.703.172-1.453.469-2.422 1.047c-.453.27-.909.566-1.27.806-1.543-.428-3.24-.648-5.025-.648-1.801 0-3.513.221-5.067.652a31.422 31.422 0 00-1.277-.811c-.969-.578-1.641-.781-2.422-1.047s-1.703-.172-1.703-.172-.203.516-.375 1.25-.375 1.484-.203 2.734c.077.562.233 1.006.382 1.333-1.31 1.493-2.078 3.397-2.078 5.704 0 5.983 3.232 8.714 9.121 9.435a4.972 4.972 0 00-1.303 2.691c-.387.17-.833.33-1.262.394-1.104.167-2.271 0-2.833-.333s-1.229-1.083-1.729-1.813c-.422-.616-1.031-1.331-1.583-1.583-.729-.333-1.438-.458-1.833-.396-.396.063-.583.354-.5.563.083.208.479.521.896.75.417.229 1.063.854 1.438 1.458.418.674.5 1.063.854 1.833.249.542 1.101 1.219 1.708 1.583.521.313 1.562.491 2.688.542.389.018 1.308-.096 2.083-.206v3.75c0 .639-.585 1.125-1.191 1.013 1.945.654 4.022.986 6.189.986 2.166 0 4.243-.332 6.19-.984-.605.111-1.19-.375-1.19-1.014v-5.804a4.97 4.97 0 00-1.373-3.425c5.846-.702 9.117-3.368 9.117-9.439zm-25.505 9.393c-.154-.079-.237-.225-.185-.328.052-.103.22-.122.374-.043s.237.225.185.328-.22.122-.374.043zm1.212.755c-.081.088-.255.06-.389-.062s-.177-.293-.096-.381c.081-.088.255-.06.389.062s.177.293.096.381zm.754 1.25c-.102.072-.275.005-.386-.15s-.118-.34-.016-.412.275-.005.386.15c.11.155.118.34.016.412zm1.083.941c-.069.112-.265.117-.437.012s-.256-.281-.187-.393c.069-.112.265-.117.437-.012s.256.281.187.393zm1.024.921c-.213-.026-.371-.159-.353-.297.017-.138.204-.228.416-.202.213.026.371.159.353.297-.017.137-.203.228-.416.202zm1.651.239c-.227-.013-.404-.143-.395-.289.009-.146.2-.255.427-.242.227.013.404.143.395.289-.009.147-.2.255-.427.242zm1.558-.156c-.242 0-.438-.126-.438-.281s.196-.281.438-.281.438.126.438.281-.197.281-.438.281z'
      />
    </motion.svg>
  )
}

export function Linkedin () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='#0288d1' d='M24 4a20 20 0 100 40 20 20 0 100-40z' />
      <path
        fill='#fff'
        d='M14 19h4v15h-4zm1.988-2h-.022C14.772 17 14 16.11 14 14.999c0-1.135.796-1.999 2.011-1.999 1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5a5.5 5.5 0 00-5.5-5.5 5.49 5.49 0 00-4.5 2.344V19h-4v15h4v-8a3 3 0 116 0v8h4v-9.5z'
      />
    </motion.svg>
  )
}

export function Instagram () {
  return (
    <motion.svg
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      xmlns='http://www.w3.org/2000/svg'
    >
      <radialGradient
        id='a'
        cx='19.38'
        cy='42.035'
        r='44.899'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#fd5' />
        <stop offset='0.328' stopColor='#ff543f' />
        <stop offset='0.348' stopColor='#fc5245' />
        <stop offset='0.504' stopColor='#e64771' />
        <stop offset='0.643' stopColor='#d53e91' />
        <stop offset='0.761' stopColor='#cc39a4' />
        <stop offset='0.841' stopColor='#c837ab' />
      </radialGradient>
      <path
        fill='url(#a)'
        d='M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z'
      />
      <radialGradient
        id='b'
        cx='11.786'
        cy='5.54'
        r='29.813'
        gradientTransform='matrix(1 0 0 .6663 0 1.849)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#4168c9' />
        <stop offset='0.999' stopColor='#4168c9' stopOpacity='0' />
      </radialGradient>
      <path
        fill='url(#b)'
        d='M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z'
      />
      <path
        fill='#fff'
        d='M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z'
      />
      <circle cx='31.5' cy='16.5' r='1.5' fill='#fff' />
      <path
        fill='#fff'
        d='M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z'
      />
    </motion.svg>
  )
}
