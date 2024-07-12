import { CircleDashed, UserCog } from "lucide-react";

export function Guests (){
  return(
    <div className="space-y-6">
            <h2 className="text-xl font-semi-bold">LConvidados</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Reserva do airbnb</span>
                  <span className="block text-sm text-zinc-400 truncante ">
                    https://www.airbnb.com.br
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5"/>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Livia</span>
                  <span className="block text-xs text-zinc-400 truncante ">
                    https://www.airbnb.com.br
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5"/>
              </div>

            </div>
            <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11  font-medium flex items-center gap-2 hover:bg-zinc-700'>
            <UserCog className='size-5'/>
              Gerenciar Convidados
          </button>

          </div>
  )
}