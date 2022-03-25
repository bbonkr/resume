import * as React from 'react';
import { Me } from '../../interfaces';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
interface SnsListProps {
    data?: Me | null;
}

export const SnsList = ({ data }: SnsListProps) => {
    return (
        <ul className="flex flex-row gap-3">
            {data?.github && (
                <li>
                    <a
                        href={`https://github.com/${data.github}`}
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer nofollow noopener"
                    >
                        <FaGithub className="text-4xl" />
                    </a>
                </li>
            )}
            {data?.twitter && (
                <li>
                    <a
                        href={`https://twitter.com/${data.twitter}`}
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer nofollow noopener"
                    >
                        <FaTwitter className="text-4xl" />
                    </a>
                </li>
            )}
            {data?.linkedin && (
                <li>
                    <a
                        href={`https://linkedin.com/in/${data.linkedin}`}
                        title="Linkedin"
                        target="_blank"
                        rel="noreferrer nofollow noopener"
                    >
                        <FaLinkedin className="text-4xl" />
                    </a>
                </li>
            )}

            {data?.facebook && (
                <li>
                    <a
                        href={`https://facebook.com/${data.facebook}`}
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer nofollow noopener"
                    >
                        <FaFacebook className="text-4xl" />
                    </a>
                </li>
            )}

            {data?.instagram && (
                <li>
                    <a
                        href={`https://instagram.com/${data.instagram}`}
                        title="Instagram"
                        target="_blank"
                        rel="noreferrer nofollow noopener"
                    >
                        <FaInstagram className="text-4xl" />
                    </a>
                </li>
            )}
        </ul>
    );
};
