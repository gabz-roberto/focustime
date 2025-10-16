import { Input } from "../Input";
import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";

const MainForm = () => {
  return (
    <form action='' id='form'>
      <div className='formSection'>
        <Input
          id='task'
          label='Tarefa'
          type='text'
          placeholder='Digite a tarefa...'
        />
      </div>
      <div className='formSection'>
        <p>
          Próximo intervalo: <strong>25</strong> min
        </p>
      </div>
      <div className='formSection'>
        <Cycles />
      </div>
      <div className='formSection'>
        <Button id='send' label={<PlayCircleIcon />} color='default' />
      </div>
    </form>
  );
};

export default MainForm;
