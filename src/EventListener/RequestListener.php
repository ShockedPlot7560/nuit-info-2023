<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\RequestEvent;

#[AsEventListener(method: 'onKernelRequest', priority: 100)]
final class RequestListener
{
    public function onKernelRequest(RequestEvent $event): void
    {
        $lang = $event->getRequest()->cookies->get("lang", "fr");
        $event->getRequest()->setLocale($lang);
    }
}