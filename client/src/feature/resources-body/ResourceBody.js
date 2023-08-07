import { useSelector } from 'react-redux';
import { DataAlgo } from '../../components/resources/body/DataAlgo';
import { InternshipSearch } from '../../components/resources/body/InternshipSearch';
import { SampleResumes } from '../../components/resources/body/SampleResumes';

export function ResourcesBody(){
  const currentContent = useSelector((state) => state.resourceBody.currentContent);

  return (
    <div className='resource-body'>
      {currentContent === 'dataAlgo' && <DataAlgo/>}
      {currentContent === 'internSearch' && <InternshipSearch/>}
      {currentContent === 'sampleResume' && <SampleResumes/>}
    </div>
  );
};