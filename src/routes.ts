import { Request, Response } from 'express'; 
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "Node Js",
        educator: "Dani", 
        duration: 10
    });

    CreateCourseService.execute({
        name: "React Js",
        educator: "Diego", 
    });

    return response.send(); 
}