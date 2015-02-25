(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">TimeTM</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:TimeTM_AgendaBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/AgendaBundle.html">AgendaBundle</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:TimeTM_AgendaBundle_Controller" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/AgendaBundle/Controller.html">Controller</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_AgendaBundle_Controller_AgendaController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/Controller/AgendaController.html">AgendaController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_AgendaBundle_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/AgendaBundle/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_AgendaBundle_DependencyInjection_Configuration" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/DependencyInjection/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:TimeTM_AgendaBundle_DependencyInjection_TimeTMAgendaExtension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/DependencyInjection/TimeTMAgendaExtension.html">TimeTMAgendaExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_AgendaBundle_Entity" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/AgendaBundle/Entity.html">Entity</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_AgendaBundle_Entity_Agenda" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/Entity/Agenda.html">Agenda</a>                    </div>                </li>                            <li data-name="class:TimeTM_AgendaBundle_Entity_AgendaRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/Entity/AgendaRepository.html">AgendaRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_AgendaBundle_Form" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/AgendaBundle/Form.html">Form</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_AgendaBundle_Form_AgendaType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/Form/AgendaType.html">AgendaType</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:TimeTM_AgendaBundle_TimeTMAgendaBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TimeTM/AgendaBundle/TimeTMAgendaBundle.html">TimeTMAgendaBundle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_CalendarBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/CalendarBundle.html">CalendarBundle</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:TimeTM_CalendarBundle_Controller" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/CalendarBundle/Controller.html">Controller</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_CalendarBundle_Controller_DefaultController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Controller/DefaultController.html">DefaultController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_CalendarBundle_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/CalendarBundle/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_CalendarBundle_DependencyInjection_Configuration" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/DependencyInjection/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_DependencyInjection_TimeTMCalendarExtension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/DependencyInjection/TimeTMCalendarExtension.html">TimeTMCalendarExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_CalendarBundle_Model" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/CalendarBundle/Model.html">Model</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_CalendarBundle_Model_Calendar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Model/Calendar.html">Calendar</a>                    </div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_Model_CalendarDay" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Model/CalendarDay.html">CalendarDay</a>                    </div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_Model_CalendarMonth" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Model/CalendarMonth.html">CalendarMonth</a>                    </div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_Model_CalendarWeek" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Model/CalendarWeek.html">CalendarWeek</a>                    </div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_Model_Times" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/Model/Times.html">Times</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:TimeTM_CalendarBundle_TimeTMCalendarBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TimeTM/CalendarBundle/TimeTMCalendarBundle.html">TimeTMCalendarBundle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_EventBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/EventBundle.html">EventBundle</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:TimeTM_EventBundle_Controller" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/EventBundle/Controller.html">Controller</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_EventBundle_Controller_EventController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/Controller/EventController.html">EventController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_EventBundle_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/EventBundle/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_EventBundle_DependencyInjection_Configuration" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/DependencyInjection/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:TimeTM_EventBundle_DependencyInjection_TimeTMEventExtension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/DependencyInjection/TimeTMEventExtension.html">TimeTMEventExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_EventBundle_Entity" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/EventBundle/Entity.html">Entity</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_EventBundle_Entity_Event" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/Entity/Event.html">Event</a>                    </div>                </li>                            <li data-name="class:TimeTM_EventBundle_Entity_EventRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/Entity/EventRepository.html">EventRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_EventBundle_Form" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/EventBundle/Form.html">Form</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_EventBundle_Form_EventType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/EventBundle/Form/EventType.html">EventType</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:TimeTM_EventBundle_TimeTMEventBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TimeTM/EventBundle/TimeTMEventBundle.html">TimeTMEventBundle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TimeTM_UserBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/UserBundle.html">UserBundle</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:TimeTM_UserBundle_Entity" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TimeTM/UserBundle/Entity.html">Entity</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:TimeTM_UserBundle_Entity_User" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TimeTM/UserBundle/Entity/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:TimeTM_UserBundle_TimeTMUserBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TimeTM/UserBundle/TimeTMUserBundle.html">TimeTMUserBundle</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "TimeTM.html", "name": "TimeTM", "doc": "Namespace TimeTM"},{"type": "Namespace", "link": "TimeTM/AgendaBundle.html", "name": "TimeTM\\AgendaBundle", "doc": "Namespace TimeTM\\AgendaBundle"},{"type": "Namespace", "link": "TimeTM/AgendaBundle/Controller.html", "name": "TimeTM\\AgendaBundle\\Controller", "doc": "Namespace TimeTM\\AgendaBundle\\Controller"},{"type": "Namespace", "link": "TimeTM/AgendaBundle/DependencyInjection.html", "name": "TimeTM\\AgendaBundle\\DependencyInjection", "doc": "Namespace TimeTM\\AgendaBundle\\DependencyInjection"},{"type": "Namespace", "link": "TimeTM/AgendaBundle/Entity.html", "name": "TimeTM\\AgendaBundle\\Entity", "doc": "Namespace TimeTM\\AgendaBundle\\Entity"},{"type": "Namespace", "link": "TimeTM/AgendaBundle/Form.html", "name": "TimeTM\\AgendaBundle\\Form", "doc": "Namespace TimeTM\\AgendaBundle\\Form"},{"type": "Namespace", "link": "TimeTM/CalendarBundle.html", "name": "TimeTM\\CalendarBundle", "doc": "Namespace TimeTM\\CalendarBundle"},{"type": "Namespace", "link": "TimeTM/CalendarBundle/Controller.html", "name": "TimeTM\\CalendarBundle\\Controller", "doc": "Namespace TimeTM\\CalendarBundle\\Controller"},{"type": "Namespace", "link": "TimeTM/CalendarBundle/DependencyInjection.html", "name": "TimeTM\\CalendarBundle\\DependencyInjection", "doc": "Namespace TimeTM\\CalendarBundle\\DependencyInjection"},{"type": "Namespace", "link": "TimeTM/CalendarBundle/Model.html", "name": "TimeTM\\CalendarBundle\\Model", "doc": "Namespace TimeTM\\CalendarBundle\\Model"},{"type": "Namespace", "link": "TimeTM/EventBundle.html", "name": "TimeTM\\EventBundle", "doc": "Namespace TimeTM\\EventBundle"},{"type": "Namespace", "link": "TimeTM/EventBundle/Controller.html", "name": "TimeTM\\EventBundle\\Controller", "doc": "Namespace TimeTM\\EventBundle\\Controller"},{"type": "Namespace", "link": "TimeTM/EventBundle/DependencyInjection.html", "name": "TimeTM\\EventBundle\\DependencyInjection", "doc": "Namespace TimeTM\\EventBundle\\DependencyInjection"},{"type": "Namespace", "link": "TimeTM/EventBundle/Entity.html", "name": "TimeTM\\EventBundle\\Entity", "doc": "Namespace TimeTM\\EventBundle\\Entity"},{"type": "Namespace", "link": "TimeTM/EventBundle/Form.html", "name": "TimeTM\\EventBundle\\Form", "doc": "Namespace TimeTM\\EventBundle\\Form"},{"type": "Namespace", "link": "TimeTM/UserBundle.html", "name": "TimeTM\\UserBundle", "doc": "Namespace TimeTM\\UserBundle"},{"type": "Namespace", "link": "TimeTM/UserBundle/Entity.html", "name": "TimeTM\\UserBundle\\Entity", "doc": "Namespace TimeTM\\UserBundle\\Entity"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\Controller", "fromLink": "TimeTM/AgendaBundle/Controller.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "doc": "&quot;Agenda controller.&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_indexAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::indexAction", "doc": "&quot;Lists all Agenda entities.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_createAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::createAction", "doc": "&quot;Creates a new Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_createCreateForm", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::createCreateForm", "doc": "&quot;Creates a form to create a Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_newAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::newAction", "doc": "&quot;Displays a form to create a new Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_showAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::showAction", "doc": "&quot;Finds and displays a Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_editAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::editAction", "doc": "&quot;Displays a form to edit an existing Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_createEditForm", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::createEditForm", "doc": "&quot;Creates a form to edit a Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_updateAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::updateAction", "doc": "&quot;Edits an existing Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_deleteAction", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::deleteAction", "doc": "&quot;Deletes a Agenda entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Controller\\AgendaController", "fromLink": "TimeTM/AgendaBundle/Controller/AgendaController.html", "link": "TimeTM/AgendaBundle/Controller/AgendaController.html#method_createDeleteForm", "name": "TimeTM\\AgendaBundle\\Controller\\AgendaController::createDeleteForm", "doc": "&quot;Creates a form to delete a Agenda entity by id.&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\DependencyInjection", "fromLink": "TimeTM/AgendaBundle/DependencyInjection.html", "link": "TimeTM/AgendaBundle/DependencyInjection/Configuration.html", "name": "TimeTM\\AgendaBundle\\DependencyInjection\\Configuration", "doc": "&quot;This is the class that validates and merges configuration from your app\/config files&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\DependencyInjection\\Configuration", "fromLink": "TimeTM/AgendaBundle/DependencyInjection/Configuration.html", "link": "TimeTM/AgendaBundle/DependencyInjection/Configuration.html#method_getConfigTreeBuilder", "name": "TimeTM\\AgendaBundle\\DependencyInjection\\Configuration::getConfigTreeBuilder", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\DependencyInjection", "fromLink": "TimeTM/AgendaBundle/DependencyInjection.html", "link": "TimeTM/AgendaBundle/DependencyInjection/TimeTMAgendaExtension.html", "name": "TimeTM\\AgendaBundle\\DependencyInjection\\TimeTMAgendaExtension", "doc": "&quot;This is the class that loads and manages your bundle configuration&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\DependencyInjection\\TimeTMAgendaExtension", "fromLink": "TimeTM/AgendaBundle/DependencyInjection/TimeTMAgendaExtension.html", "link": "TimeTM/AgendaBundle/DependencyInjection/TimeTMAgendaExtension.html#method_load", "name": "TimeTM\\AgendaBundle\\DependencyInjection\\TimeTMAgendaExtension::load", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\Entity", "fromLink": "TimeTM/AgendaBundle/Entity.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda", "doc": "&quot;class representing an Agenda&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method___toString", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::__toString", "doc": "&quot;stringify&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_getId", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_setUser", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::setUser", "doc": "&quot;Set user&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_getUser", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::getUser", "doc": "&quot;Get userId&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_setName", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::setName", "doc": "&quot;Set name&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_getName", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::getName", "doc": "&quot;Get name&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_setDescription", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::setDescription", "doc": "&quot;Set description&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Entity\\Agenda", "fromLink": "TimeTM/AgendaBundle/Entity/Agenda.html", "link": "TimeTM/AgendaBundle/Entity/Agenda.html#method_getDescription", "name": "TimeTM\\AgendaBundle\\Entity\\Agenda::getDescription", "doc": "&quot;Get description&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\Entity", "fromLink": "TimeTM/AgendaBundle/Entity.html", "link": "TimeTM/AgendaBundle/Entity/AgendaRepository.html", "name": "TimeTM\\AgendaBundle\\Entity\\AgendaRepository", "doc": "&quot;AgendaRepository&quot;"},
                    
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle\\Form", "fromLink": "TimeTM/AgendaBundle/Form.html", "link": "TimeTM/AgendaBundle/Form/AgendaType.html", "name": "TimeTM\\AgendaBundle\\Form\\AgendaType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Form\\AgendaType", "fromLink": "TimeTM/AgendaBundle/Form/AgendaType.html", "link": "TimeTM/AgendaBundle/Form/AgendaType.html#method_buildForm", "name": "TimeTM\\AgendaBundle\\Form\\AgendaType::buildForm", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Form\\AgendaType", "fromLink": "TimeTM/AgendaBundle/Form/AgendaType.html", "link": "TimeTM/AgendaBundle/Form/AgendaType.html#method_setDefaultOptions", "name": "TimeTM\\AgendaBundle\\Form\\AgendaType::setDefaultOptions", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\AgendaBundle\\Form\\AgendaType", "fromLink": "TimeTM/AgendaBundle/Form/AgendaType.html", "link": "TimeTM/AgendaBundle/Form/AgendaType.html#method_getName", "name": "TimeTM\\AgendaBundle\\Form\\AgendaType::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\AgendaBundle", "fromLink": "TimeTM/AgendaBundle.html", "link": "TimeTM/AgendaBundle/TimeTMAgendaBundle.html", "name": "TimeTM\\AgendaBundle\\TimeTMAgendaBundle", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Controller", "fromLink": "TimeTM/CalendarBundle/Controller.html", "link": "TimeTM/CalendarBundle/Controller/DefaultController.html", "name": "TimeTM\\CalendarBundle\\Controller\\DefaultController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Controller\\DefaultController", "fromLink": "TimeTM/CalendarBundle/Controller/DefaultController.html", "link": "TimeTM/CalendarBundle/Controller/DefaultController.html#method_indexAction", "name": "TimeTM\\CalendarBundle\\Controller\\DefaultController::indexAction", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Controller\\DefaultController", "fromLink": "TimeTM/CalendarBundle/Controller/DefaultController.html", "link": "TimeTM/CalendarBundle/Controller/DefaultController.html#method_monthAction", "name": "TimeTM\\CalendarBundle\\Controller\\DefaultController::monthAction", "doc": "&quot;*&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Controller\\DefaultController", "fromLink": "TimeTM/CalendarBundle/Controller/DefaultController.html", "link": "TimeTM/CalendarBundle/Controller/DefaultController.html#method_dayAction", "name": "TimeTM\\CalendarBundle\\Controller\\DefaultController::dayAction", "doc": "&quot;*&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Controller\\DefaultController", "fromLink": "TimeTM/CalendarBundle/Controller/DefaultController.html", "link": "TimeTM/CalendarBundle/Controller/DefaultController.html#method_weekAction", "name": "TimeTM\\CalendarBundle\\Controller\\DefaultController::weekAction", "doc": "&quot;*&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\DependencyInjection", "fromLink": "TimeTM/CalendarBundle/DependencyInjection.html", "link": "TimeTM/CalendarBundle/DependencyInjection/Configuration.html", "name": "TimeTM\\CalendarBundle\\DependencyInjection\\Configuration", "doc": "&quot;This is the class that validates and merges configuration from your app\/config files&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\DependencyInjection\\Configuration", "fromLink": "TimeTM/CalendarBundle/DependencyInjection/Configuration.html", "link": "TimeTM/CalendarBundle/DependencyInjection/Configuration.html#method_getConfigTreeBuilder", "name": "TimeTM\\CalendarBundle\\DependencyInjection\\Configuration::getConfigTreeBuilder", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\DependencyInjection", "fromLink": "TimeTM/CalendarBundle/DependencyInjection.html", "link": "TimeTM/CalendarBundle/DependencyInjection/TimeTMCalendarExtension.html", "name": "TimeTM\\CalendarBundle\\DependencyInjection\\TimeTMCalendarExtension", "doc": "&quot;This is the class that loads and manages your bundle configuration&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\DependencyInjection\\TimeTMCalendarExtension", "fromLink": "TimeTM/CalendarBundle/DependencyInjection/TimeTMCalendarExtension.html", "link": "TimeTM/CalendarBundle/DependencyInjection/TimeTMCalendarExtension.html#method_load", "name": "TimeTM\\CalendarBundle\\DependencyInjection\\TimeTMCalendarExtension::load", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Model", "fromLink": "TimeTM/CalendarBundle/Model.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html", "name": "TimeTM\\CalendarBundle\\Model\\Calendar", "doc": "&quot;Abstract class representing a calendar&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method___construct", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_init", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::init", "doc": "&quot;initialize the calendar.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getYear", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getYear", "doc": "&quot;Get year&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getMonthName", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getMonthName", "doc": "&quot;Get monthName&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getPrevYearUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getPrevYearUrl", "doc": "&quot;Get PrevYearUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getPrevMonthUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getPrevMonthUrl", "doc": "&quot;Get PrevMonthUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getNextMonthUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getNextMonthUrl", "doc": "&quot;Get NextMonthUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getNextYearUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getNextYearUrl", "doc": "&quot;Get NextYearUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getDayUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getDayUrl", "doc": "&quot;Get DayUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getModeChangeUrl", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getModeChangeUrl", "doc": "&quot;Get ModeChangeUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getMonthCalendarDates", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getMonthCalendarDates", "doc": "&quot;get the dates to display for a monthly view&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setYear", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setYear", "doc": "&quot;Set year&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setMonth", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setMonth", "doc": "&quot;Set month&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setMonthName", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setMonthName", "doc": "&quot;Set monthName&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setWeekno", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setWeekno", "doc": "&quot;Set weekno&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getWeekno", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getWeekno", "doc": "&quot;Get weekno&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setAdditionnalNavigationParameters", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setAdditionnalNavigationParameters", "doc": "&quot;Set additionnal panel navigation parameters.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_childInit", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::childInit", "doc": "&quot;additionnal init.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_getMonth", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::getMonth", "doc": "&quot;Get month&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Calendar", "fromLink": "TimeTM/CalendarBundle/Model/Calendar.html", "link": "TimeTM/CalendarBundle/Model/Calendar.html#method_setPanelNavigationParameters", "name": "TimeTM\\CalendarBundle\\Model\\Calendar::setPanelNavigationParameters", "doc": "&quot;Set panel navigation parameters.&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Model", "fromLink": "TimeTM/CalendarBundle/Model.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "doc": "&quot;class representing a daily calendar&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method___construct", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_setAdditionnalNavigationParameters", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::setAdditionnalNavigationParameters", "doc": "&quot;Set additionnal panel navigation parameters.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getYesterdayUrl", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getYesterdayUrl", "doc": "&quot;Get YesterdayUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getTomorrowUrl", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getTomorrowUrl", "doc": "&quot;Get YesterdayUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getDay", "doc": "&quot;Get day&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getDayName", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getDayName", "doc": "&quot;Get dayName&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getPrevMonthDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getPrevMonthDay", "doc": "&quot;Get prevMonthDay&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getNextMonthDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getNextMonthDay", "doc": "&quot;Get nextMonthDay&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_getCurrentDayStamp", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::getCurrentDayStamp", "doc": "&quot;Get day stamp&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_childInit", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::childInit", "doc": "&quot;Set additionnal panel navigation parameters.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_setDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::setDay", "doc": "&quot;Set day&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_setDayName", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::setDayName", "doc": "&quot;Set dayName&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_setPrevMonthDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::setPrevMonthDay", "doc": "&quot;Set prevMonthDay&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarDay", "fromLink": "TimeTM/CalendarBundle/Model/CalendarDay.html", "link": "TimeTM/CalendarBundle/Model/CalendarDay.html#method_setNextMonthDay", "name": "TimeTM\\CalendarBundle\\Model\\CalendarDay::setNextMonthDay", "doc": "&quot;Set NextMonthDay&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Model", "fromLink": "TimeTM/CalendarBundle/Model.html", "link": "TimeTM/CalendarBundle/Model/CalendarMonth.html", "name": "TimeTM\\CalendarBundle\\Model\\CalendarMonth", "doc": "&quot;class representing a monthly calendar&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarMonth", "fromLink": "TimeTM/CalendarBundle/Model/CalendarMonth.html", "link": "TimeTM/CalendarBundle/Model/CalendarMonth.html#method___construct", "name": "TimeTM\\CalendarBundle\\Model\\CalendarMonth::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarMonth", "fromLink": "TimeTM/CalendarBundle/Model/CalendarMonth.html", "link": "TimeTM/CalendarBundle/Model/CalendarMonth.html#method_setAdditionnalNavigationParameters", "name": "TimeTM\\CalendarBundle\\Model\\CalendarMonth::setAdditionnalNavigationParameters", "doc": "&quot;Set additionnal panel navigation parameters&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarMonth", "fromLink": "TimeTM/CalendarBundle/Model/CalendarMonth.html", "link": "TimeTM/CalendarBundle/Model/CalendarMonth.html#method_childInit", "name": "TimeTM\\CalendarBundle\\Model\\CalendarMonth::childInit", "doc": "&quot;initialize the calendar.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarMonth", "fromLink": "TimeTM/CalendarBundle/Model/CalendarMonth.html", "link": "TimeTM/CalendarBundle/Model/CalendarMonth.html#method_setDefaultOptions", "name": "TimeTM\\CalendarBundle\\Model\\CalendarMonth::setDefaultOptions", "doc": "&quot;configure the options resolver.&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Model", "fromLink": "TimeTM/CalendarBundle/Model.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "doc": "&quot;class representing a weekly calendar&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method___construct", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getWeekCalendarDates", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getWeekCalendarDates", "doc": "&quot;get the dates to display for a weekly view&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getNextWeekUrl", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getNextWeekUrl", "doc": "&quot;Get NextWeekUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getPrevWeekUrl", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getPrevWeekUrl", "doc": "&quot;Get PrevWeekUrl&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getWeekStamp", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getWeekStamp", "doc": "&quot;Get WeekStamp&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_setWeekMonth", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::setWeekMonth", "doc": "&quot;Set month&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_childInit", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::childInit", "doc": "&quot;initialize the calendar.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_setAdditionnalNavigationParameters", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::setAdditionnalNavigationParameters", "doc": "&quot;Set additionnal panel navigation parameters&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getMonthNameFromMonthNumber", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getMonthNameFromMonthNumber", "doc": "&quot;Get MonthNameFromMonthNumber&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getFirstDateOfWeek", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getFirstDateOfWeek", "doc": "&quot;Get FirstDateOfWeek&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\CalendarWeek", "fromLink": "TimeTM/CalendarBundle/Model/CalendarWeek.html", "link": "TimeTM/CalendarBundle/Model/CalendarWeek.html#method_getLastDateOfWeek", "name": "TimeTM\\CalendarBundle\\Model\\CalendarWeek::getLastDateOfWeek", "doc": "&quot;Get LastDateOfWeek&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle\\Model", "fromLink": "TimeTM/CalendarBundle/Model.html", "link": "TimeTM/CalendarBundle/Model/Times.html", "name": "TimeTM\\CalendarBundle\\Model\\Times", "doc": "&quot;class representing a weekly calendar&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Times", "fromLink": "TimeTM/CalendarBundle/Model/Times.html", "link": "TimeTM/CalendarBundle/Model/Times.html#method___construct", "name": "TimeTM\\CalendarBundle\\Model\\Times::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\CalendarBundle\\Model\\Times", "fromLink": "TimeTM/CalendarBundle/Model/Times.html", "link": "TimeTM/CalendarBundle/Model/Times.html#method_getDayTimes", "name": "TimeTM\\CalendarBundle\\Model\\Times::getDayTimes", "doc": "&quot;get the hours to display for a day view&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\CalendarBundle", "fromLink": "TimeTM/CalendarBundle.html", "link": "TimeTM/CalendarBundle/TimeTMCalendarBundle.html", "name": "TimeTM\\CalendarBundle\\TimeTMCalendarBundle", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\Controller", "fromLink": "TimeTM/EventBundle/Controller.html", "link": "TimeTM/EventBundle/Controller/EventController.html", "name": "TimeTM\\EventBundle\\Controller\\EventController", "doc": "&quot;Event controller.&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_indexAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::indexAction", "doc": "&quot;Lists all Event entities.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_createAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::createAction", "doc": "&quot;Creates a new Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_createCreateForm", "name": "TimeTM\\EventBundle\\Controller\\EventController::createCreateForm", "doc": "&quot;Creates a form to create a Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_newAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::newAction", "doc": "&quot;Displays a form to create a new Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_showAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::showAction", "doc": "&quot;Finds and displays a Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_editAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::editAction", "doc": "&quot;Displays a form to edit an existing Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_createEditForm", "name": "TimeTM\\EventBundle\\Controller\\EventController::createEditForm", "doc": "&quot;Creates a form to edit a Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_updateAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::updateAction", "doc": "&quot;Edits an existing Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_deleteAction", "name": "TimeTM\\EventBundle\\Controller\\EventController::deleteAction", "doc": "&quot;Deletes a Event entity.&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Controller\\EventController", "fromLink": "TimeTM/EventBundle/Controller/EventController.html", "link": "TimeTM/EventBundle/Controller/EventController.html#method_createDeleteForm", "name": "TimeTM\\EventBundle\\Controller\\EventController::createDeleteForm", "doc": "&quot;Creates a form to delete a Event entity by id.&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\DependencyInjection", "fromLink": "TimeTM/EventBundle/DependencyInjection.html", "link": "TimeTM/EventBundle/DependencyInjection/Configuration.html", "name": "TimeTM\\EventBundle\\DependencyInjection\\Configuration", "doc": "&quot;This is the class that validates and merges configuration from your app\/config files&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\EventBundle\\DependencyInjection\\Configuration", "fromLink": "TimeTM/EventBundle/DependencyInjection/Configuration.html", "link": "TimeTM/EventBundle/DependencyInjection/Configuration.html#method_getConfigTreeBuilder", "name": "TimeTM\\EventBundle\\DependencyInjection\\Configuration::getConfigTreeBuilder", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\DependencyInjection", "fromLink": "TimeTM/EventBundle/DependencyInjection.html", "link": "TimeTM/EventBundle/DependencyInjection/TimeTMEventExtension.html", "name": "TimeTM\\EventBundle\\DependencyInjection\\TimeTMEventExtension", "doc": "&quot;This is the class that loads and manages your bundle configuration&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\EventBundle\\DependencyInjection\\TimeTMEventExtension", "fromLink": "TimeTM/EventBundle/DependencyInjection/TimeTMEventExtension.html", "link": "TimeTM/EventBundle/DependencyInjection/TimeTMEventExtension.html#method_load", "name": "TimeTM\\EventBundle\\DependencyInjection\\TimeTMEventExtension::load", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\Entity", "fromLink": "TimeTM/EventBundle/Entity.html", "link": "TimeTM/EventBundle/Entity/Event.html", "name": "TimeTM\\EventBundle\\Entity\\Event", "doc": "&quot;Event&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getId", "name": "TimeTM\\EventBundle\\Entity\\Event::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setAgenda", "name": "TimeTM\\EventBundle\\Entity\\Event::setAgenda", "doc": "&quot;Set agenda&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getAgenda", "name": "TimeTM\\EventBundle\\Entity\\Event::getAgenda", "doc": "&quot;Get agenda&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setTitle", "name": "TimeTM\\EventBundle\\Entity\\Event::setTitle", "doc": "&quot;Set title&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getTitle", "name": "TimeTM\\EventBundle\\Entity\\Event::getTitle", "doc": "&quot;Get title&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setPlace", "name": "TimeTM\\EventBundle\\Entity\\Event::setPlace", "doc": "&quot;Set place&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getPlace", "name": "TimeTM\\EventBundle\\Entity\\Event::getPlace", "doc": "&quot;Get place&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setDescription", "name": "TimeTM\\EventBundle\\Entity\\Event::setDescription", "doc": "&quot;Set description&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getDescription", "name": "TimeTM\\EventBundle\\Entity\\Event::getDescription", "doc": "&quot;Get description&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setDate", "name": "TimeTM\\EventBundle\\Entity\\Event::setDate", "doc": "&quot;Set date&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getDate", "name": "TimeTM\\EventBundle\\Entity\\Event::getDate", "doc": "&quot;Get date&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setTime", "name": "TimeTM\\EventBundle\\Entity\\Event::setTime", "doc": "&quot;Set time&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getTime", "name": "TimeTM\\EventBundle\\Entity\\Event::getTime", "doc": "&quot;Get time&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setDuration", "name": "TimeTM\\EventBundle\\Entity\\Event::setDuration", "doc": "&quot;Set duration&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getDuration", "name": "TimeTM\\EventBundle\\Entity\\Event::getDuration", "doc": "&quot;Get duration&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_setParticipants", "name": "TimeTM\\EventBundle\\Entity\\Event::setParticipants", "doc": "&quot;Set participants&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Entity\\Event", "fromLink": "TimeTM/EventBundle/Entity/Event.html", "link": "TimeTM/EventBundle/Entity/Event.html#method_getParticipants", "name": "TimeTM\\EventBundle\\Entity\\Event::getParticipants", "doc": "&quot;Get participants&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\Entity", "fromLink": "TimeTM/EventBundle/Entity.html", "link": "TimeTM/EventBundle/Entity/EventRepository.html", "name": "TimeTM\\EventBundle\\Entity\\EventRepository", "doc": "&quot;EventRepository&quot;"},
                    
            {"type": "Class", "fromName": "TimeTM\\EventBundle\\Form", "fromLink": "TimeTM/EventBundle/Form.html", "link": "TimeTM/EventBundle/Form/EventType.html", "name": "TimeTM\\EventBundle\\Form\\EventType", "doc": "&quot;Form for Event CRUD&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\EventBundle\\Form\\EventType", "fromLink": "TimeTM/EventBundle/Form/EventType.html", "link": "TimeTM/EventBundle/Form/EventType.html#method_buildForm", "name": "TimeTM\\EventBundle\\Form\\EventType::buildForm", "doc": "&quot;create the form&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Form\\EventType", "fromLink": "TimeTM/EventBundle/Form/EventType.html", "link": "TimeTM/EventBundle/Form/EventType.html#method_setDefaultOptions", "name": "TimeTM\\EventBundle\\Form\\EventType::setDefaultOptions", "doc": "&quot;configure OptionsResolverInterface&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\EventBundle\\Form\\EventType", "fromLink": "TimeTM/EventBundle/Form/EventType.html", "link": "TimeTM/EventBundle/Form/EventType.html#method_getName", "name": "TimeTM\\EventBundle\\Form\\EventType::getName", "doc": "&quot;get form name&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\EventBundle", "fromLink": "TimeTM/EventBundle.html", "link": "TimeTM/EventBundle/TimeTMEventBundle.html", "name": "TimeTM\\EventBundle\\TimeTMEventBundle", "doc": "&quot;bundle declaration&quot;"},
                    
            {"type": "Class", "fromName": "TimeTM\\UserBundle\\Entity", "fromLink": "TimeTM/UserBundle/Entity.html", "link": "TimeTM/UserBundle/Entity/User.html", "name": "TimeTM\\UserBundle\\Entity\\User", "doc": "&quot;Implementation of FOS\\UserBundle\\Model\\User&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\UserBundle\\Entity\\User", "fromLink": "TimeTM/UserBundle/Entity/User.html", "link": "TimeTM/UserBundle/Entity/User.html#method___construct", "name": "TimeTM\\UserBundle\\Entity\\User::__construct", "doc": "&quot;stringify&quot;"},
                    {"type": "Method", "fromName": "TimeTM\\UserBundle\\Entity\\User", "fromLink": "TimeTM/UserBundle/Entity/User.html", "link": "TimeTM/UserBundle/Entity/User.html#method_getId", "name": "TimeTM\\UserBundle\\Entity\\User::getId", "doc": "&quot;Get id&quot;"},
            
            {"type": "Class", "fromName": "TimeTM\\UserBundle", "fromLink": "TimeTM/UserBundle.html", "link": "TimeTM/UserBundle/TimeTMUserBundle.html", "name": "TimeTM\\UserBundle\\TimeTMUserBundle", "doc": "&quot;Extend FOSUserBundle&quot;"},
                                                        {"type": "Method", "fromName": "TimeTM\\UserBundle\\TimeTMUserBundle", "fromLink": "TimeTM/UserBundle/TimeTMUserBundle.html", "link": "TimeTM/UserBundle/TimeTMUserBundle.html#method_getParent", "name": "TimeTM\\UserBundle\\TimeTMUserBundle::getParent", "doc": "&quot;define bundle as FOSUserBundle child&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


