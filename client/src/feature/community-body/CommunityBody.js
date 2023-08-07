import { useSelector } from 'react-redux';
import { CareerExperience } from '../../components/communities/body/CareerExperience';
import { Mentorship } from '../../components/communities/body/Mentorship';
import { PeerInterview } from '../../components/communities/body/PeerInterview';
import { ProjectCollab } from '../../components/communities/body/ProjectCollaboration';

export function CommunityBody(){
  const currentContent = useSelector((state) => state.communitiesBody.currentContent);

  return (
    <div className='resource-body'>
      {currentContent === 'ProjectCollab' && <ProjectCollab/>}
      {currentContent === 'CareerExperience' && <CareerExperience/>}
      {currentContent === 'Mentorship' && <Mentorship/>}
      {currentContent === 'PeerInterview' && <PeerInterview/>}
    </div>
  );
};