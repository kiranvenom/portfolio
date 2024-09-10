import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
	return (
		<div>
			<form>
				<div className='grid grid-cols-2 mt-10 gap-10'>
					<div>
						<Label htmlFor='name'>Name</Label>
						<Input type='text' id='name' placeholder='Name' />
					</div>

					<div>
						<Label htmlFor='email'>Email</Label>
						<Input type='email' id='email' placeholder='Email' />
					</div>

					<div>
						<Label htmlFor='number'>Phone Number</Label>
						<Input
							type='number'
							id='number'
							placeholder='Phone Number'
						/>
					</div>

					<div>
						<Label htmlFor='text'>Project Type</Label>
						<Select>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Project Type' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='frontEnd'>
									FrontEnd
								</SelectItem>
								<SelectItem value='backEnd'>BackEnd</SelectItem>
								<SelectItem value='fullStack'>
									Full Stack
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className='mt-[2.5rem]'>
					<Label htmlFor='message'>Message</Label>
					<Textarea placeholder='Type your message here.' />
				</div>

				<div className='flex items-center justify-end mt-12'>
					<Button className='text-xl rounded-full border pt-3'>
						<div className='flex items-center gap-2 hover:gap-4 transition-all'>
							<h2>Submit</h2>
							<FaArrowRight />
						</div>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
