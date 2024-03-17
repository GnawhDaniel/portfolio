export default function Home() {  

const DanielJayHwang = String.raw`

$$$$$$$\                      $$\           $$\       $$\   $$\                                             
$$  __$$\                     \__|          $$ |      $$ |  $$ |                                            
$$ |  $$ | $$$$$$\  $$$$$$$\  $$\  $$$$$$\  $$ |      $$ |  $$ |$$\  $$\  $$\  $$$$$$\  $$$$$$$\   $$$$$$\  
$$ |  $$ | \____$$\ $$  __$$\ $$ |$$  __$$\ $$ |      $$$$$$$$ |$$ | $$ | $$ | \____$$\ $$  __$$\ $$  __$$\ 
$$ |  $$ | $$$$$$$ |$$ |  $$ |$$ |$$$$$$$$ |$$ |      $$  __$$ |$$ | $$ | $$ | $$$$$$$ |$$ |  $$ |$$ /  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$ |$$   ____|$$ |      $$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |  $$ |$$ |  $$ |
$$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ |\$$$$$$$\ $$ |      $$ |  $$ |\$$$$$\$$$$  |\$$$$$$$ |$$ |  $$ |\$$$$$$$ |
\_______/  \_______|\__|  \__|\__| \_______|\__|      \__|  \__| \_____\____/  \_______|\__|  \__| \____$$ |
                                                                                                  $$\   $$ |
                                                                                                  \$$$$$$  |
                                                                                                   \______/                                                                                                            
    `;

  return (
    <div className="w-screen">
      <div className="ascii-art sm:text-ascii-sm lg:text-base">
        <pre className="break-normal">
          {DanielJayHwang}
        </pre>
      </div>
      <div className="terminal flex flex-row font-mono">
        <p className="text-bash-green">guest@danieljayhwang.com</p>
        <p>:~</p>
        <p className="text-consolas">$ </p>
      </div>
    </div>
  );
}
