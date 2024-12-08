'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { FormSchema } from '@/lib/types';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
// import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../../../../public/cypresslogo.svg';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Loader from '@/components/global/Loader';
// import { Separator } from '@/components/ui/separator';
// import { actionLoginUser } from '@/lib/server-actions/auth-actions';

const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');
  
  return (
    <div>LoginPage</div>
  );
};

export default LoginPage;