
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
  const naviagate = useNavigate()
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'livia@email.com'
  ])

  function openGuestsInput(){
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestInputOpen(false)
  }

  function openGuestModal(){
    setIsGuestModalOpen(true);
  }

  function closeGuestsModal(){
    setIsGuestModalOpen(false)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

  // evento sendo passado como argumento porque e disparada uma ação elemento html
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    // para evitar o refresh da pagina 
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email= data.get('email')?.toString()
     
    //condicao de campo vazio
    if(!email){
      return
    }
    
    if(emailsToInvite.includes(email)){
      return
    }

    //adicionar novo email, spreed para iterar
    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
   const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    naviagate('/trip/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
       <div className='flex flex-col items-center gap-3'>
        <img src="/logo.svg" alt="logo"/>
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
       </div>

    <div className='space-y-4'>
      <DestinationAndDateStep
          isGuestInputOpen={isGuestInputOpen} 
          closeGuestsInput={closeGuestsInput}
          openGuestsInput={openGuestsInput}
      />

      {isGuestInputOpen ? (
        <InviteGuestsStep
          openGuestModal ={openGuestModal}
          openConfirmTripModal = {openConfirmTripModal}
          emailsToInvite ={emailsToInvite}
        />
        )  : null}
    </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos
        <a className="text-zinc-300 underline" href="#">termos de uso
        </a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
       <InviteGuestModal
         addNewEmailToInvite={addNewEmailToInvite}
         closeGuestsModal={closeGuestsModal}
         removeEmailFromInvites={removeEmailFromInvites}
         emailsToInvite={emailsToInvite}
       />
      )} 

       {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
       )}
   </div>
  )}


