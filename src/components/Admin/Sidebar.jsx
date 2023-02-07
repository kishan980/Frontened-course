import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiDashboardFill,
  RiEye2Fill,
  RiEyeFill,
  RiUser3Fill,
  RiAddCircleFill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      p="16"
      boxShadow={`-2px 0 10px rgba(107, 70, 193,0.5)`}
    >
      <LinkButton
        Icon={RiDashboardFill}
        text="Dashboard"
        url={'dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        Icon={RiAddCircleFill}
        text="Create Course"
        url={'createCourse'}
        active={location.pathname === '/admin/createCourse'}
      />
      <LinkButton
        Icon={RiEyeFill}
        text="Courses"
        url={'courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        Icon={RiUser3Fill}
        text="User"
        url={'users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        colorScheme={active ? 'purple' : ''}
        fontSize={'large'}
        variant="ghost"
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
